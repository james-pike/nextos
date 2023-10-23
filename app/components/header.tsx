'use client'

import React from 'react';
import '/app/globals.css'
import { Button, Navbar } from 'flowbite-react';

export default function Header() {
 
    const navbarStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000, // You can adjust the z-index value if needed
        borderRadius: 0,
        
        // Add other styling as needed, like background color, box shadow, etc.
      };
    
      const buttonStyle = {
        margin: '0 5px', // Add margin to create spacing between buttons
        padding: '0px'
      };

    return (



<nav className="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray dark:bg-gray-900 dark:border-gray-600">
<div className='fixed z-50 w-full'>
<Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 ml-3 mr-3 sm:h-9" alt="Flowbite React Logo" />
        <span className="text-2xl font-semibold text-black dark:text-white">Webdev.ca</span>
      </Navbar.Brand>
      <div className="flex px-0 md:order-2">
      <Button style={buttonStyle} href='/contact' className='px-0 bg-blue-600'>Contact</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
      <ul className="flex flex-col p-4 -mt-1.5 font-medium text-left border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> 
      <Navbar.Link href="/" active className="bg-blue-700 rounded">
                  Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="/contact">Contact</Navbar.Link>
              </ul>
      </Navbar.Collapse>
    </Navbar>
    </div>
    </nav>

    )
}

