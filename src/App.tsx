import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Mainroutes";

const App: FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
