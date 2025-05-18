import React, { memo } from "react";
import styled, { css } from "styled-components";

import { Icon } from "../Icon";
import type { EIconName } from "../Icon/types";

type Props = {
  icon?: EIconName;
  isActive: boolean;
  onClick: () => void;
  text: string;
};

export const Tab: React.FC<Props> = memo(
  ({ isActive, text, icon, onClick }) => (
    <StyledTab isActive={isActive} onClick={onClick}>
      <Content>
        {icon && <Icon name={icon} size={24} />}
        {text}
      </Content>
    </StyledTab>
  )
);

export const StyledTab = styled.div<{ isActive: boolean }>`
  border-top: 1px solid;
  border-left: 1px solid;
  border-bottom: 1px solid;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 16px;
  width: 100%;

  ${({ isActive }) => {
    if (isActive) {
      return css`
        background: #008151;
        border-color: #003723;
        color: white;
      `;
    }

    return css`
      background: #fdf7f0;
      border-color: #9e5500;
      color: #9e5500;
    `;
  }};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
