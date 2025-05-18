import React, { memo, useCallback } from "react";
import styled, { css } from "styled-components";

import { EIconName } from "./types";
import * as Icons from "./icons";

type Props = {
  name: EIconName;
  size?: number;
};

export const Icon: React.FC<Props> = memo(({ name, size = 16 }) => {
  const renderIcon = useCallback(() => {
    switch (name) {
      case EIconName.Bars:
        return <Icons.BarsIcon />;
      case EIconName.Calendar:
        return <Icons.CalendarIcon />;
      case EIconName.Gift:
        return <Icons.GiftIcon />;
      case EIconName.TennisBall:
        return <Icons.TennissBallIcon />;
      case EIconName.Trophy:
        return <Icons.TrophyIcon />;
      case EIconName.User:
        return <Icons.UserIcon />;
      case EIconName.Users:
        return <Icons.UsersIcon />;
      default:
        break;
    }
  }, [name]);

  return <StyledIcon size={size}>{renderIcon()}</StyledIcon>;
});

const StyledIcon = styled.div<Pick<Props, "size">>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) => css`
    height: ${size}px;
    width: ${size}px;
  `};

  svg {
    height: 100%;
    width: 100%;
  }
`;
