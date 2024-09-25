import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Table.css';

const Home = () => {

    const [apiData, setApiData] = useState([]);
    const [inputData, setInputData] = useState('');

    const fetchData = () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setApiData(data)
                console.log('i am in home page', data)
            })
            .catch(error => console.error('Error fetching countries:', error));
    }

    const inputValue = (e)=>{
        setInputData(e.target.value)
    }

    const filterData = () => {
       
        return apiData.filter((country) => {
            return country.name.common.toLowerCase().includes(inputData.toLowerCase());
        });
    }

    let filteredProducts = filterData();

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>

            <div className='container'>
                <nav>
                    <h1>Search for a Country</h1>
                    <input type='text' placeholder='Enter Country Name' onChange={(e) => inputValue(e)} />
                </nav>
                <div className='flex'>
                    {
                        filteredProducts.map((value) => {
                            console.log("i am in map", value)
                            return (
                                <Link key={value.cca2} to={`/country/${value.id}`} state={value}>
                                    <div>
                                        <table className="table border">
                                            {console.log("i am in table", value)}
                                            <thead>
                                                <tr>
                                                    <th scope="col" >{value.name.common}</th>
                                                    <th scope="col" ><i className="fa-solid fa-magnifying-glass" style={{ color: '#000000' }}></i></th>
                                                </tr>
                                            </thead> 
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Country Code</th>
                                                    <td>{value.cca2}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Language</th>
                                                    <td>{value.languages ? Object.values(value.languages).join(', ') : 'N/A'}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Currency</th>
                                                    <td>{value.currencies ?
                                                        Object.keys(value.currencies).map((currencyCode) => {
                                                            const currency = value.currencies[currencyCode];
                                                            return `${currency.name} (${currency.symbol})`;
                                                        }).join(', ')
                                                        : 'N/A'}</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home



