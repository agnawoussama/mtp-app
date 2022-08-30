import { useEffect, useState } from "react";
import { directus } from "../services/directus";

const useAuth = () => {
  const [user, setUser] = useState(null);

  const getCurrentUser = async () => {
    try {
      const currentUser = await directus.users.me.read();
      const userRole = await directus.roles.readOne(currentUser.role);
      if (currentUser) {
        setUser({ ...currentUser, adminAccess: userRole.admin_access });
      } else {
        setUser({
          email: "guest",
        });
      }
    } catch (e) {
      setUser({
        email: "guest",
      });
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return {
    user: { isLoggedin: user?.email !== "guest", ...user },
    login: async (credentials) => await directus.auth.login(credentials),
    logout: async () => await directus.auth.logout(),
  };
};

export default useAuth;
