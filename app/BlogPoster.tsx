import React, { useEffect } from 'react';
import {
  $getRoot,
  $getSelection,
  LexicalComposer,
  LexicalErrorBoundary,
} from 'lexical';

import {
  LexicalPlainTextPlugin,
  ContentEditable,
  LexicalHistoryPlugin,
  LexicalOnChangePlugin,
  useLexicalComposerContext,
} from '@lexical/react';

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

function Editor() {
  const initialConfig = {
    namespace: 'MyEditor',
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <LexicalPlainTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <LexicalOnChangePlugin onChange={onChange} />
      <LexicalHistoryPlugin />
      <MyCustomAutoFocusPlugin />
    </LexicalComposer>
  );
}

export default function EditorPage() {
  return (
    <div>
      <h1>Editor Page</h1>
      <Editor />
      {/* Other components or content */}
    </div>
  );
}
