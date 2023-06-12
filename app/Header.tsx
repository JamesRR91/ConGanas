import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import NavLinks from './NavLinks';
import Search from './Search';






function Header() {
  return (
    <header>
        <div className='grid grid-cols-3 p-10 items-center bg-chris-400'>
            <Bars3Icon className='h-8 w-8 cursor-pointer'/>
          <Link href='/' prefetch={false}>
          <h1 className='font-serif text-4xl text-center text-chrismaroon'>
            The Saballos Soapbox
          </h1>
          </Link>
          <div className='flex items-center justify-end space-x-2'>
            {/*DarkModeButton */}
          <button className='hidden md:inline bg-chrismaroon text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800'>
            <h1>
                Subscribe
            </h1>
          </button>
          </div>
        </div>
        <NavLinks />
        <Search />
    </header>
  )
}

export default Header
