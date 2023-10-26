import Editor, { Monaco, useMonaco } from "@monaco-editor/react";
import React, { MutableRefObject, useEffect } from "react";
import { emmetCSS, emmetHTML, emmetJSX } from "emmet-monaco-es";
import { themeDark, themeLight, settings } from "../../constants";
import { EditorWrapper, EditorHeader, HeaderGroup, EditorLang } from "./styles/editor.style";
import { getStorage, parseBooleanString } from "../../helpers";

/** For Sidebar Toggle */
import { Settings } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { sidebarTabs } from "../../constants";
import { SettingsTab } from "../sidebar/sidebar/tabs";
import { Sidebar, Tooltip } from "../../components";

interface CodeEditorProps {
  language: string;
  code: string;
  onChanged: (val: string | undefined) => void;
  langLabel: string;
} 

export const editorRefArray: Array<MutableRefObject<any>> = [];

export function CodeEditor(props: CodeEditorProps) {
  const monaco = useMonaco();
  const { language, langLabel, code, onChanged } = props;

  const editorRef: MutableRefObject<any> = React.useRef(null);

  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.editor.defineTheme(settings.theme.values.dark, {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": `${themeDark.background.primary}`,
        "editor.lineHighlightBackground": `${themeDark.editor.line}`,
        "dropdown.background": `${themeDark.background.secondary}`,
        "editorWidget.background": `${themeDark.background.primary}`,
      },
    });

    monaco.editor.defineTheme(settings.theme.values.light, {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": `${themeLight.background.primary}`,
        "editor.lineHighlightBackground": `${themeLight.editor.line}`,
        "editorLineNumber.foreground": `${themeLight.editor.lineNum}`,
        "editorCursor.foreground": `${themeLight.text.secondary}`,
        "dropdown.background": `${themeLight.background.secondary}`,
        "editorWidget.background": `${themeLight.background.secondary}`,
      },
    });
  };

  useEffect(() => {
    if (monaco) {
      const disposeCSS = emmetCSS(monaco);
      const disposeHTML = emmetHTML(monaco);
      const disposeJSX = emmetJSX(monaco);

      return () => {
        disposeCSS();
        disposeHTML();
        disposeJSX();
      };
    }
  }, [monaco]);

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor;
    editorRefArray.push(editorRef.current);
  };


  const handleChange = (value: string | undefined) => {
    onChanged(value);
  };

  const { t } = useTranslation();

  const [activeTab, setActiveTab] = React.useState("");

  const toggleTab = (tabName: string): void => {
    if (activeTab === tabName) {
      setActiveTab("");
    } else {
      setActiveTab(tabName);
    }
  };

  return (
    <EditorWrapper>
      <EditorHeader>
        <EditorLang>{langLabel}</EditorLang>
        <HeaderGroup>
        <Sidebar.MenuItem
          isActive={activeTab === sidebarTabs.settings}
          onClick={() => toggleTab(sidebarTabs.settings)}
        >
          <Tooltip title={t("tooltips.sidebar.settings")}>
            <Settings style={{ fontSize: 22 }} />
          </Tooltip>
        </Sidebar.MenuItem>
        <SettingsTab isActive={activeTab === sidebarTabs.settings} />
        </HeaderGroup>
      </EditorHeader>
      <Editor
        language={language}
        value={code}
        onChange={handleChange}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
      />
    </EditorWrapper>
  );
}
