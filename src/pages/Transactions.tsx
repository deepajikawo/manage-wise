
import { Card } from "@/components/ui/card";

const Transactions = () => {
  return (
    <div className="space-y-8 animate-slideIn">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-900">Transactions</h1>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Transaction #{i}001</p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
              <span className="text-sm font-medium text-success">+${i * 100}.00</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Transactions;
