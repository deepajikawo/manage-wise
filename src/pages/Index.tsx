
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";

const Index = () => {
  // Sample data - replace with real data
  const inventoryStats = [
    { label: "Total Items", value: "1,234", change: "+12%" },
    { label: "Low Stock", value: "45", change: "-5%" },
    { label: "Out of Stock", value: "12", change: "-2%" },
    { label: "Total Value", value: "$45,678", change: "+8%" },
  ];

  const activityData = [
    { name: "Mon", value: 12 },
    { name: "Tue", value: 19 },
    { name: "Wed", value: 14 },
    { name: "Thu", value: 25 },
    { name: "Fri", value: 23 },
    { name: "Sat", value: 18 },
    { name: "Sun", value: 15 },
  ];

  return (
    <div className="space-y-8 animate-slideIn">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {inventoryStats.map((stat) => (
          <Card key={stat.label} className="p-6 hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <div className="flex items-end justify-between mt-2">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <span
                className={`text-sm ${
                  stat.change.startsWith("+") ? "text-success" : "text-error"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Activity</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#9b87f5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Item {i}</p>
                  <p className="text-sm text-gray-600">Added to inventory</p>
                </div>
                <span className="text-sm text-gray-600">2 hours ago</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Low Stock Alert</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Item {i}</p>
                  <p className="text-sm text-warning">Only 5 units left</p>
                </div>
                <button className="px-3 py-1 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  Restock
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
