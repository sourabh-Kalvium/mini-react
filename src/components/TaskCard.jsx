import React from 'react'
import { Link } from 'react-router-dom'

export default function TaskCard({ task }) {
  return (
    <Link to={`/tasks/${task.id}`} className="block p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 border dark:border-gray-700 hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{task.title}</h3>
        <span className={`px-2 py-1 text-sm rounded ${task.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Task ID: {task.id}</p>
    </Link>
  )
}
