import React from 'react'

const Trips = ({ trips }) => {
  return (
    <div>
      <center><h1>Trips list</h1></center>
      {trips.map((trip) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{trip.city}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{trip.date}</h6>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Trips