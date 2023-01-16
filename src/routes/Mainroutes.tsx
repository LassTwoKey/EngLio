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
import LearnPage from "../pages/LearnPage";
import CategoryLearnPage from "../pages/CategoryLearnPage";
import { paths } from "../data/constants";
import { SECTIONS } from "../data/constants";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.main} element={<Layout />} errorElement={<ErrorPage />}>
      <Route path={`${paths.welcome}`} element={<WelcomePage />} />
      <Route index element={<Navigate replace to={`${paths.welcome}`} />} />

      <Route path={`${paths.flashcards}`} element={<FlashCards />} />
      <Route path={`${paths.flashcards}/:id`} element={<FlashCardPage />} />

      <Route path={`${paths.learn}/:id`} element={<LearnPage />}></Route>

      <Route
        path={`${paths.learn}`}
        element={
          <Navigate replace to={`/${paths.learn}/${SECTIONS.favorites}`} />
        }
      />
      <Route path={`${paths.learn}/:id/:id`} element={<CategoryLearnPage />} />
    </Route>
  )
);
