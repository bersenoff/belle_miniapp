import { useLocation } from "react-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { EIconName } from "../../ux/core/Icon/types";
import { ERoute } from "../../data/routes";
import { Tabs } from "../../ux/core";
import type { Tab } from "../../ux/core/Tabs/types";

type Props = {
  children: React.ReactNode;
};

enum MainTabs {
  Menu = "menu",
  Profile = "profile",
}

const tabs: Tab<MainTabs>[] = [
  {
    icon: EIconName.Bars,
    text: "Меню",
    value: MainTabs.Menu,
    route: ERoute.Main,
  },
  {
    icon: EIconName.User,
    text: "Профиль",
    value: MainTabs.Profile,
    route: ERoute.Profile,
  },
];

export const Layout: React.FC<Props> = ({ children }) => {
  const [tab, setTab] = useState<MainTabs>(MainTabs.Menu);
  const location = useLocation();
  const isShowTabs = useMemo<boolean>(
    () => [ERoute.Main, ERoute.Profile].includes(location.pathname as ERoute),
    [location.pathname]
  );

  const onChangeTab = useCallback((value: MainTabs) => {
    setTab(value);
  }, []);

  useEffect(() => {
    if (location.pathname === ERoute.Main) {
      setTab(MainTabs.Menu);
    }
    if (location.pathname === ERoute.Profile) {
      setTab(MainTabs.Profile);
    }
  }, [location.pathname]);

  return (
    <Wrapper>
      {children}
      {isShowTabs && (
        <Tabs<MainTabs>
          tabs={tabs}
          value={tab}
          onChange={onChangeTab}
          isFullWidth
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 12px;
  height: 100%;
`;
