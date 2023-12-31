'use client';

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react"

function Search() {
const [input, setInput] =useState('');
const router=useRouter();

const handleSearch= (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!input) return;

    router.push(`/search?term=${input}`);
}
  return (
    <form
    onSubmit={handleSearch}
    className="max-w-6xl mx-auto flex justify-between items-center px-5">
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for..."
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-blue-400" />

        <button type="submit"
        disabled={!input}
        className='text-blue-400 disabled:text-gray-400'
        >Search</button>

    </form>
  )
}

export default Search
