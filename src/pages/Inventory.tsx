
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InventoryDialog } from "@/components/inventory/InventoryDialog";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  quantity: number;
}

const Inventory = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | undefined>();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
  });

  const { data: items, isLoading } = useQuery({
    queryKey: ["inventory"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("inventory_items")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as InventoryItem[];
    },
  });

  const addMutation = useMutation({
    mutationFn: async (newItem: Omit<InventoryItem, "id">) => {
      const { data, error } = await supabase
        .from("inventory_items")
        .insert([{ ...newItem, user_id: session?.user.id }])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventory"] });
      toast({
        title: "Success",
        description: "Item added successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (item: InventoryItem) => {
      const { data, error } = await supabase
        .from("inventory_items")
        .update({
          name: item.name,
          sku: item.sku,
          quantity: item.quantity,
        })
        .eq("id", item.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventory"] });
      toast({
        title: "Success",
        description: "Item updated successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });

  const handleSubmit = async (data: Omit<InventoryItem, "id">) => {
    if (selectedItem) {
      updateMutation.mutate({ ...data, id: selectedItem.id });
    } else {
      addMutation.mutate(data);
    }
    setIsDialogOpen(false);
    setSelectedItem(undefined);
  };

  const handleEdit = (item: InventoryItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setSelectedItem(undefined);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-8 animate-slideIn">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-900">Inventory</h1>
        <Button onClick={handleAdd}>
          Add Item
        </Button>
      </div>

      <Card className="p-6">
        {isLoading ? (
          <div className="flex justify-center items-center p-8">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        ) : (
          <div className="space-y-4">
            {items?.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-600">
                    Quantity: {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            ))}
            {items?.length === 0 && (
              <p className="text-center text-gray-500">No items in inventory</p>
            )}
          </div>
        )}
      </Card>

      <InventoryDialog
        open={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          setSelectedItem(undefined);
        }}
        onSubmit={handleSubmit}
        item={selectedItem}
      />
    </div>
  );
};

export default Inventory;
