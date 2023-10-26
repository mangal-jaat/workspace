import React from "react";
import { useTranslation } from "react-i18next";

import { Sidebar } from "../../../..";
import { TabProps } from "../../../types/sidebar.type";
import {
  ThemeSetting,
  LayoutSetting,
  LocalizationSetting,
  LiveModeSetting,
  FontSizeSetting,
  IndentSizeSetting,
  IndentTypeSetting
} from "./components";

export function SettingsTab(props: TabProps) {
  const { isActive } = props;

  const { t } = useTranslation();

  return (
    <Sidebar.Tab isActive={isActive}>
      <Sidebar.TabHeader>
        {t("sidebar.settings.title")} 
        <Sidebar.MenuItem>
          <Sidebar.ShareLink /> 
        </Sidebar.MenuItem>
      </Sidebar.TabHeader>
      <Sidebar.TabList>
        <Sidebar.TabListItem>
          <Sidebar.TabListName>
            {t("sidebar.settings.general.title")}
          </Sidebar.TabListName>
          <Sidebar.TabSubList>
            <ThemeSetting />
            <LayoutSetting />
            <LocalizationSetting />
          </Sidebar.TabSubList>
        </Sidebar.TabListItem>

        <Sidebar.TabListItem>
          <Sidebar.TabListName>
            {t("sidebar.settings.editor.title")}
          </Sidebar.TabListName>
          <Sidebar.TabSubList>
            <LiveModeSetting />
            <FontSizeSetting />
            <IndentSizeSetting />
            <IndentTypeSetting />
          </Sidebar.TabSubList>
        </Sidebar.TabListItem>
      </Sidebar.TabList>
    </Sidebar.Tab>
  );
}
