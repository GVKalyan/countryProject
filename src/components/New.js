import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const [apiData, setApiData] = useState([]);  // Initialize with an empty array

    const fetchData = () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setApiData(data)
                console.log('i am in home page', data)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className='container'>
                <nav>
                    <h1>Search for a Country</h1>
                    <input type='text' placeholder='Enter Country Name' />
                </nav>

                {apiData && Array.isArray(apiData) && apiData.length > 0 ? (
                    apiData.map((value, index) => {  // Add index or a unique key
                        return (
                            <Link key={index} to={`/country/${value.ccn3}`} state={value}>  {/* Use ccn3 instead of id */}
                                <div>
                                    <table className="table border">
                                        <thead>
                                            <tr>
                                                <th scope="col">{value.name.common}</th>
                                                <th scope="col">First</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Country Code</th>
                                                <td>{value.cca2}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Language</th>
                                                <td>{value.languages ? Object.values(value.languages)[0] : 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Currency</th>
                                                <td>{value.currencies ? Object.keys(value.currencies).join(', ') : 'N/A'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Link>
                        )
                    })
                ) : (
                    <p>Loading countries data...</p>
                )}
            </div>
        </>
    )
}

export default Home;
