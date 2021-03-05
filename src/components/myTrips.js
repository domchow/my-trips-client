import React from 'react'

import { ListWrapper, Ul } from './ListWrapper.style'
import Card from './Card'

const Trips = ({ trips }) => {
    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {trips.map(trip => (
                <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-sm divide-y divide-gray-200">
                    <Card city={trip.city} date={trip.date} />
                </li>
            ))}
            </ul>
        </div>
    )
};

export default Trips
