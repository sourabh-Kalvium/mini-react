import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold">Personal Task Dashboard</h1>
        <nav className="space-x-4">
          <NavLink to="/" className={({isActive}) => (isActive ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300')}>Home</NavLink>
          <NavLink to="/tasks" className={({isActive}) => (isActive ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300')}>Tasks</NavLink>
        </nav>
      </div>
    </header>
  )
}
