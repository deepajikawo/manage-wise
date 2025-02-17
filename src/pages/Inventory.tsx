
import { Card } from "@/components/ui/card";

const Inventory = () => {
  return (
    <div className="space-y-8 animate-slideIn">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-900">Inventory</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          Add Item
        </button>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Product {i}</p>
                <p className="text-sm text-gray-600">SKU: PRD-00{i}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-600">Quantity: {i * 10}</span>
                <button className="px-3 py-1 text-sm text-primary hover:text-primary/90 transition-colors">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Inventory;
