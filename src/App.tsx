
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import DashboardLayout from "./components/layout/DashboardLayout";
import Inventory from "./pages/Inventory";
import Login from "./pages/auth/Login";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import "./App.css";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route element={
            <ProtectedRoute>
              <DashboardLayout>
                <Routes>
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/" element={<Navigate to="/inventory" replace />} />
                </Routes>
              </DashboardLayout>
            </ProtectedRoute>
          }>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/" element={<Navigate to="/inventory" replace />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
