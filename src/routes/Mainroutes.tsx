import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from "react-router-dom";

import WelcomePage from "../pages/WelcomePage";
import Layout from "../layout/Layout";
import FlashCards from "../pages/FlashCardsPage/FlashCards";
import ErrorPage from "../pages/ErrorPage";
import FlashCardPage from "../pages/FlashCardPage";
import FavoritesPage from "../pages/FavoritesPage";
import FavoritePage from "../pages/FavoritePage";
import { paths } from "../data/constants";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.main} element={<Layout />} errorElement={<ErrorPage />}>
      <Route path={`${paths.welcome}`} element={<WelcomePage />} />
      <Route index element={<Navigate replace to={`${paths.welcome}`} />} />

      <Route path={`${paths.flashcards}`} element={<FlashCards />} />
      <Route path={`${paths.flashcards}/:id`} element={<FlashCardPage />} />

      <Route path={`${paths.favorite}`} element={<FavoritesPage />} />
      <Route path={`${paths.favorite}/:id`} element={<FavoritePage />} />
    </Route>
  )
);
