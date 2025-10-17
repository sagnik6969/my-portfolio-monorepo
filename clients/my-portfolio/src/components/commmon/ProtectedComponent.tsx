import { useAuth } from "@/contexts/AuthContext";
import LoginPage from "@/pages/LoginPage";

export default function ProtectedComponent({ children }: any) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <LoginPage />;
  }

  return children;
}
