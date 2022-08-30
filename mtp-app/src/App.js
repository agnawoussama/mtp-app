import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import routes from "./config/routes";
import Layout from "./components/Layout";
import Protected from "./components/Protected";
import useAuth from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  if (!user?.email) {
    return null;
  }

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route) => {
              if (route.protected) {
                if (route.adminAccess) {
                  return (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={
                        <Protected
                          isLoggedin={user.email !== "guest"}
                          adminAccess
                          isAdmin={user.adminAccess}
                        >
                          {route.element}
                        </Protected>
                      }
                    />
                  );
                }
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <Protected isLoggedin={user?.isLoggedin}>
                        {route.element}
                      </Protected>
                    }
                  />
                );
              }
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
