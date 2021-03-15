import React from 'react'

import { ListWrapper, Ul } from './ListWrapper.style'
import Card from './Card'

const Trips = ({ trips }) => {

    function handleDelete(id) {
        fetch('http://127.0.0.1:8080/trips/' + id, {
            method: 'DELETE',
        })
        .then(() => console.log('deleted trip id:' + id))
        .then(() => window.location.reload())
    }

    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {trips.map(trip => (
                <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-lg divide-y divide-gray-200">
                    <Card city={trip.city} date={trip.date}  id={trip.id} onDelete={handleDelete}/>
                </li>
            ))}
            </ul>
        </div>
    )
};

export default Trips
