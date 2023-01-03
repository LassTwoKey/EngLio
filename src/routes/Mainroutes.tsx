import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import WelcomePage from "../pages/WelcomePage";
import Layout from "../components/Layout/Layout";
import FlashCards from "../pages/FlashCards";
import ErrorPage from "../pages/ErrorPage";
import { paths } from "../data/constants";
import FlashCardPage from "../pages/FlashCardPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.main} element={<Layout />} errorElement={<ErrorPage />}>
      <Route path={`${paths.welcome}`} element={<WelcomePage />} />
      <Route index element={<Navigate replace to={`${paths.welcome}`} />} />
      <Route path={`${paths.flashcards}`} element={<FlashCards />} />
      <Route path={`${paths.flashcards}/:id`} element={<FlashCardPage />} />
    </Route>
  )
);
