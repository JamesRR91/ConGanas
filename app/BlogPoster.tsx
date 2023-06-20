// import { useEffect, useRef } from 'react';
// import EditorJS from '@editorjs/editorjs';
// import Header from '@editorjs/header';
// import List from '@editorjs/list';
// import './editor.css';
// const BlogPoster = () => {
//   const editorRef = useRef<EditorJS | null>(null);

//   useEffect(() => {
//     let editorInstance: EditorJS | null = null;

//     const initializeEditor = async () => {
//       // Initialize the Editor.js instance
//       editorInstance = await new EditorJS({
//         holder: 'editorjs-container',
//         autofocus: true,
//         tools: {
//           header: Header,
//           list: List,
//           // Add more tools here if needed
//         },
//         // Additional configuration options
//       });
//     };

//     initializeEditor();

//     return () => {
//       // Destroy the Editor.js instance when the component unmounts
//       if (editorInstance) {
//         editorInstance.destroy();
//       }
//     };
//   }, []);

//   return <div id="editorjs-container" />;
// };

// export default BlogPoster;

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <EditorContent editor={editor} className='bg-white, text-black'/>
  )
}

export default Tiptap
