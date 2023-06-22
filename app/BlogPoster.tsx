import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { saveBlogPost } from './Blog.js';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  const handleSave = async () => {
    const title = prompt('Enter a title for your blog post');
    if (title) {
      await saveBlogPost(title, editor.getHTML());
      alert('Blog post saved successfully!');
    }
  }

  return (
    <>
      <EditorContent editor={editor} className="bg-white text-black" />
      <button onClick={handleSave}>Save</button>
    </>
  )
}

export default Tiptap
