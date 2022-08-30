import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Admin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div>
      <h1>Admin Page</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Admin;
