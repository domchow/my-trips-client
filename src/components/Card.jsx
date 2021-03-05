import React from 'react'

const Card = ({ city, date }) => {
    return (
        <div class="flex-1 flex flex-col p-8 rounded-lg">
            <img style={{borderRadius: '5px', marginBottom: '5px'}} src="https://via.placeholder.com/150" />
            <h5 class="card-title">{city}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{date}</h6>
        </div>
    )
}

export default Card