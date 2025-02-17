
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import DashboardLayout from "./components/layout/DashboardLayout";
import Inventory from "./pages/Inventory";
import "./App.css";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </DashboardLayout>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
