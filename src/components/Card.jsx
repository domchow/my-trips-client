import React from 'react'
import {Trash} from 'react-feather'

const Card = ({ city, date }) => {
    return (
        <div class="flex-1 flex flex-col p-8 rounded-lg">
            <img style={{borderRadius: '5px', marginBottom: '5px'}} src="https://via.placeholder.com/150" />
            <h5 class="card-title">{city}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{date}</h6>
            <button onClick={() => console.log('I will delete this trip')} type="button" class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <Trash />
            </button>
        </div>
    )
}

export default Card