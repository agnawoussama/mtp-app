import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedin, isAdmin, adminAccess, children }) => {
  if (!isLoggedin) {
    return <Navigate to="/login" replace />;
  }
  if (adminAccess && !isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
