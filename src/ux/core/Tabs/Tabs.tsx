import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

import { Tab as TabComponent } from "./Tab";
import type { Tab } from "./types";

type Props<T = string> = {
  tabs: Tab<T>[];
  value: T;
  onChange: (value: T) => void;
  isFullWidth?: boolean;
};

function Tabs<T = string>({ tabs, value, onChange, isFullWidth }: Props<T>) {
  const navigate = useNavigate();

  const handleChangeFactory = useCallback(
    (tab: Tab<T>) => () => {
      onChange(tab.value);
      if (tab.route) {
        navigate(tab.route);
      }
    },
    [onChange, navigate]
  );

  return (
    <Wrapper isFullWidth={isFullWidth}>
      {tabs.map((tab) => (
        <TabComponent
          key={tab.value as string}
          text={tab.text}
          icon={tab.icon}
          isActive={tab.value === value}
          onClick={handleChangeFactory(tab)}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div<Pick<Props, "isFullWidth">>`
  display: flex;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "auto")};
`;

export default Tabs;
