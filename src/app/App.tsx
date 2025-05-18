import React from "react";
import { Navigate, Route, Routes } from "react-router";

import { ERoute } from "../data/routes";
import { EventForm } from "../scenes/EventForm";
import { GameForm } from "../scenes/GameForm";
import { MainMenu } from "../scenes/MainMenu";
import { Profile } from "../scenes/Profile";
import { Shop } from "../scenes/Shop";
import { TournamentForm } from "../scenes/TournamentForm";
import { TrainingForm } from "../scenes/TrainingForm";

import { Layout } from "./Layout";
import "./styles.css";

export const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={ERoute.Main} element={<MainMenu />} />
        <Route path={ERoute.Profile} element={<Profile />} />
        <Route path={ERoute.TrainingForm} element={<TrainingForm />} />
        <Route path={ERoute.GameForm} element={<GameForm />} />
        <Route path={ERoute.EventForm} element={<EventForm />} />
        <Route path={ERoute.TournamentForm} element={<TournamentForm />} />
        <Route path={ERoute.Shop} element={<Shop />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};
