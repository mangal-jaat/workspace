import Editor, { Monaco, useMonaco } from "@monaco-editor/react";
import React, { MutableRefObject, useEffect } from "react";
import { emmetCSS, emmetHTML, emmetJSX } from "emmet-monaco-es";
import { themeDark, themeLight, settings } from "../../constants";
import { EditorWrapper, EditorHeader, EditorLang } from "./styles/editor.style";
import { getStorage, parseBooleanString } from "../../helpers";

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

  /**
  *  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    emmetHTML(monaco);
    emmetCSS(monaco);
    emmetJSX(monaco);

    editorRef.current = editor;
    editorRefArray.push(editorRef.current);
  };
  */

  const handleChange = (value: string | undefined) => {
    onChanged(value);
  };

  return (
    <EditorWrapper>
      <EditorHeader>
        <EditorLang>{langLabel}</EditorLang>
      </EditorHeader>
      <Editor
        language={language}
        value={code}
        onChange={handleChange}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        theme={"vs-dark"}
      />
    </EditorWrapper>
  );
}
