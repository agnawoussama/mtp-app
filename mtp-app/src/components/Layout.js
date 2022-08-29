import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container maxW="7xl" minH="7xl">
      {children}
    </Container>
  );
};

export default Layout;
