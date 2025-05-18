import styled, { css } from "styled-components";
import type { ButtonProps } from "../types";

export const StyledButton = styled.button<
  Pick<ButtonProps, "size" | "isFullWidth">
>`
  background: none;
  border-radius: 12px;
  border: 1px solid;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  user-select: none;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "auto")};

  ${({ size }) => {
    if (size === "sm") {
      return css`
        padding: 8px;
      `;
    }
    if (size === "md") {
      return css`
        padding: 16px;
      `;
    }
    if (size === "lg") {
      return css`
        padding: 24px;
      `;
    }
  }};
`;
