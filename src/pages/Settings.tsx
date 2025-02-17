
import { Card } from "@/components/ui/card";

const Settings = () => {
  return (
    <div className="space-y-8 animate-slideIn">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-900">Settings</h1>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">General Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Notifications</p>
              <p className="text-sm text-gray-600">Manage email notifications</p>
            </div>
            <button className="px-3 py-1 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Configure
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Account</p>
              <p className="text-sm text-gray-600">Update your account information</p>
            </div>
            <button className="px-3 py-1 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Edit
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
