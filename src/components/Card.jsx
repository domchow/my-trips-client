import React from 'react'
import {Trash} from 'react-feather'

const Card = ({ city, date, id, onDelete }) => {
    return (
        <div class="flex-1 flex flex-col p-2.5 rounded-lg">
            <img src="https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"  style={{height: '200px', borderRadius: '5px', marginBottom: '5px'}} />
            
            <div class="flex items-start flex-col">
                <p class="text-md font-medium text-indigo-600">
                  <a href="#" class="hover:underline">
                    {city}
                  </a>
                </p>
                <a href="#" class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900">
                    {date}
                  </p>
                </a>
            <button onClick={() => onDelete(id)} type="button" class="self-end inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </button>
            </div>
        </div>
    )
}

export default Card