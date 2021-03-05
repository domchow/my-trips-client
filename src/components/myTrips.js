import React from 'react'

import { ListWrapper, Ul } from './ListWrapper.style'

const Trips = ({ trips }) => {
    return (
        <div>
        <center><h1 class="text-3xl text-left">Trips list</h1></center>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <ListWrapper>
            <Ul>
            {trips.map((trip) => (
                <div class="px-4 py-4 sm:px-6">
                    <h5 class="card-title">{trip.city}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{trip.date}</h6>
                </div>
            ))}
            </Ul>
        </ListWrapper>
        </div>
        </div>
    )
};

export default Trips
