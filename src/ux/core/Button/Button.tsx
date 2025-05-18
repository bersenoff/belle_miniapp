import React, { memo, useCallback, useMemo } from "react";
import styled from "styled-components";

import { Icon } from "../Icon";

import { StyledBlueButton } from "./components/StyledBlueButton";
import { StyledGreenButton } from "./components/StyledGreenButton";
import { StyledRedButton } from "./components/StyledRedButton";
import { StyledSandButton } from "./components/StyledSandButton";
import { StyledYellowButton } from "./components/StyledYellowButton";
import type { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = memo(
  ({ color, icon, text, size = "md", ...props }) => {
    const Component = useMemo(() => {
      switch (color) {
        case "green":
          return StyledGreenButton;
        case "yellow":
          return StyledYellowButton;
        case "blue":
          return StyledBlueButton;
        case "red":
          return StyledRedButton;
        case "sand":
          return StyledSandButton;
        default:
          return null;
      }
    }, [color]);

    const getIconSize = useCallback(() => {
      switch (size) {
        case "sm":
          return 16;
        case "md":
          return 16;
        case "lg":
          return 24;
        default:
          return 16;
      }
    }, [size]);

    if (!Component) {
      return null;
    }

    return (
      <Component size={size} {...props}>
        <Content>
          {icon && <Icon name={icon} size={getIconSize()} />}
          <span>{text}</span>
        </Content>
      </Component>
    );
  }
);

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
