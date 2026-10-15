import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { PageNotFound } from "../pages/error/PageNotFound";
import { App } from "../pages/App";
import { Anons } from "../pages/anons/Anons";
import { CharactersPage } from "../pages/characters/CharactersPage";
import { CharacterPage } from "../pages/characters/character/CharacterPage";
import { CharactersRacePage } from "../pages/characters/charactersRacePage/CharactersRacePage";
import { DonationPage } from "../pages/donation/DonationPage";
import { ThanksPage } from "../pages/thanks/ThanksPage";
import { FaqPage } from "../pages/faq/FaqPage";

const basename = import.meta.env.BASE_URL || "/";

export const router = createBrowserRouter(
  [
    {
      // точка входа
      path: "",
      element: <AppLayout />,
      // 404 page
      errorElement: <PageNotFound />,
      // маршрутизация
      children: [
        // главная страница
        { path: "", element: <App /> },
        // страница анонса
        { path: "anons", element: <Anons /> },
        // страница персонажей
        { path: "characters", element: <CharactersPage /> },
        // страница рас персонажей
        { path: "characters/:raceName", element: <CharactersRacePage /> },
        // страница конкретного персонажа
        { path: "characters/:raceName/:urlName", element: <CharacterPage /> },
        // страница доната
        { path: "donation", element: <DonationPage /> },
        // страница особой благодарности
        { path: "thanks", element: <ThanksPage /> },
        // страница вопросов
        { path: "faq", element: <FaqPage /> },
        // 404 page на все неправильные пути
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ],
  {basename}
);
