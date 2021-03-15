import React, { useEffect, useState } from 'react'

import Trips from './components/myTrips'
import Layout from './components/layout/Layout'

const url = 'http://127.0.0.1:8080/trips'

const App: React.FC = () => {
	const [localTrips, setTrips] = useState([]) as any

	useEffect(() => {
		async function fetchData() {
			const params = {
				method: 'GET',
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:3000',
				},
			}

			try {
				const response = await fetch(url, params)
				const trips = await response.json()

				setTrips(trips)
			} catch (error) {
				console.log('Error:', error)
			}
		}

		fetchData()
	}, [setTrips])

	return <Layout><Trips trips={localTrips} /></Layout>
}

export default App
