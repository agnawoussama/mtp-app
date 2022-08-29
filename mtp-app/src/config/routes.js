import Home from "../views/Home";
import Login from "../views/Login";
import Admin from "../views/Admin";
// import Channel from "./Channels/Channel";
// import ListChannels from "./Channels/ListChannels";
// import SingleAnnonce from "./Channels/SingleAnnonce";

const routes = [
  {
    path: "/",
    element: <Home />,
    protected: true,
  },
  {
    path: "/login",
    element: <Login />,
    protected: false,
  },
  {
    path: "/admin",
    element: <Admin />,
    protected: true,
    adminAccess: true,
  },
  //   {
  //     path: "/listChannels",
  //     element: <ListChannels />,
  //   },
  //   {
  //     path: "/channel/:idChannel",
  //     element: <Channel />,
  //   },
  //   {
  //     path: "/annonce/:idAnnonce",
  //     element: <SingleAnnonce />,
  //   },
];

export default routes;
