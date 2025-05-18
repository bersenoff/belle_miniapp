import { useNavigate } from "react-router";
import React, { useCallback } from "react";
import styled from "styled-components";

import { Button } from "../../ux/core";
import { EIconName } from "../../ux/core/Icon/types";
import { ERoute } from "../../data/routes";

export const MainMenu: React.FC = () => {
  const navigate = useNavigate();

  const goToTrainingForm = useCallback(
    () => navigate(ERoute.TrainingForm),
    [navigate]
  );
  const goToGameForm = useCallback(() => navigate(ERoute.GameForm), [navigate]);
  const goToEventForm = useCallback(
    () => navigate(ERoute.EventForm),
    [navigate]
  );
  const goToTournamentForm = useCallback(
    () => navigate(ERoute.TournamentForm),
    [navigate]
  );
  const goToShop = useCallback(() => navigate(ERoute.Shop), [navigate]);

  return (
    <Wrapper>
      <MenuWrapper>
        <Button
          color="green"
          icon={EIconName.TennisBall}
          text="Записаться на тренировку"
          size="lg"
          onClick={goToTrainingForm}
          isFullWidth
        />
        <Button
          color="yellow"
          icon={EIconName.Users}
          text="Записаться на игру"
          size="lg"
          onClick={goToGameForm}
          isFullWidth
        />
        <Button
          color="blue"
          icon={EIconName.Calendar}
          text="Создать событие"
          size="lg"
          onClick={goToEventForm}
          isFullWidth
        />
        <Button
          color="red"
          icon={EIconName.Trophy}
          text="Записаться на турнир"
          size="lg"
          onClick={goToTournamentForm}
          isFullWidth
        />
        <Button
          color="sand"
          icon={EIconName.Gift}
          text="Выбрать подарок"
          size="lg"
          onClick={goToShop}
          isFullWidth
        />
      </MenuWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
