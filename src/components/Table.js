import React from 'react'
import './Table.css';
import { useLocation } from 'react-router-dom'

const Table = () => {

  const  {state} = useLocation()
     console.log("this is state",state)

  return (
    <>

      <div className='mainMargin'>
        <h1>{state.name.common}</h1> 

       <div className='grid-container'>

        <div className='flex'>
        <div className='margin grid-item'>
          <h2>Names</h2>
          <table className="table table1 border">
            <thead>
              <tr>
                <th scope="col" >Common</th>
                <th scope="col" >{state.name.common}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Official</th>
                <td>{state.name.official}</td>
              </tr>

              <tr>
                <th scope="row">Common(Native)</th>
                <td>{state.translations.ara.common}</td>
              </tr>

              <tr>
                <th scope="row">Official(Native)</th>
                <td>{state.translations.ara.official}</td>
              </tr>

              <tr>
                <th scope="row">Alternative spellings</th>
                <td>{state.altSpellings[0]}</td>
              </tr>

            </tbody>
          </table>
        </div>

        <div className='margin grid-item'>
          <h2>Language</h2>
          <table className="table table1 border">
            <thead>
              <tr>
                <th scope="col" >Native Language</th>
                <th scope="col" >{state.languages ? Object.values(state.languages).join(', ') : 'N/A'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Languages</th>
                <td></td>
              </tr>

              <tr>
                <th scope="row">{Object.keys(state.translations)[0]}</th>
                <td>{state.translations.ara.common}</td>
              </tr>

              <tr>
                <th scope="row">{Object.keys(state.translations)[1]}</th>
                <td>{state.translations.bre.common}</td>
              </tr>

              <tr>
                <th scope="row">{Object.keys(state.translations)[11]}</th>
                <td>{state.translations.jpn.common}</td>
              </tr>

            </tbody>
          </table>
        </div>

        <div className='margin grid-item'>
          <h2>Codes</h2>
          <table className="table table1 border">
            <thead>
              <tr>
                <th scope="col" >cca2</th>
                <th scope="col" >{state.cca2}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">ccn3</th>
                <td>{state.ccn3}</td>
              </tr>

              <tr>
                <th scope="row">cca3</th>
                <td>{state.cca3}</td>
              </tr>
              
              <tr>
                <th scope="row">cioc</th>
                <td>{state.cioc}</td>
              </tr>

              {/* <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
              </tr> */}

            </tbody>
          </table>
        </div>

        <div className='margin grid-item'>
          <h2>Geography</h2>
          <table className="table table1 border">
            <thead>
              <tr>
                <th scope="col" >Region</th>
                <th scope="col" >{state.region}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Subregion</th>
                <td>{state.subregion}</td>
              </tr>

              <tr>
                <th scope="row">Capital</th>
                <td>{state.capital[0]}</td>
              </tr>

              <tr>
                <th scope="row">Demonym</th>
                <td>{state.demonyms ? Object.values(state.languages).join(', ') : 'N/A'}</td>
              </tr>

              <tr>
                <th scope="row">Continent</th>
                <td>{state.continents[0]}</td>
              </tr>

            </tbody>
          </table>
        </div>
          
        </div>

        <div className='margin1 grid-item'>
          <img src={state.flags.png} alt='flag-image'/>
        </div>
        </div>
      </div>

    </>
  )
}

export default Table

