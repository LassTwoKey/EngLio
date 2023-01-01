import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import { WelcomePage } from "../pages/WelcomePage";
import Layout from "../components/Layout/Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<p>Ошибка</p>}>
      <Route path="welcome" element={<WelcomePage />} />
      <Route index element={<Navigate replace to="welcome" />} />
    </Route>
  )
);
