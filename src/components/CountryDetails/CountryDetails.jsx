import {React, useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom'


const CountriesDetails = ({countries})=>{
    const { code } = useParams();
    const [country, setCountry] = useState(null);
    // const foundCountry = countries.find((country) => {   
    //     return country.alpha3Code === code;
    // });
   let apiUrl=`https://ih-countries-api.herokuapp.com/countries/${code}`
    useEffect(() => {
        async function fetchCountry() {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setCountry(data);
        }
        fetchCountry();
    }, [code]);
    
    if(!country){
        return 
        
    }
       
    return (<div className="col-7" key={country.alpha2Code}>
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}alt={country.name.common}/>
    <h1>{country.name.common}</h1>
    <table className="table">
    <thead></thead>
        <tbody>
            <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{country.capital[0]}</td>
            </tr>
            <tr>
                <td>Capital</td>
                <td>{country.area}km<sup>2</sup></td>
            </tr>
            <tr>
                <td>Borders</td>
                <td>
                    <ul>
                         {country.borders.map((borderCountryCode) =>{
                            return (
                                <Link to={`../${borderCountryCode}`}>
                                    <li key={country.name.common} style={{listStyle:"none"}}>
                                        {borderCountryCode}
                                    </li>
                                </Link>
                            )
                         })}
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</div>
        // <div className="col-7" key={foundCountry.alpha2Code}>
        //     <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}alt="{country.name.common} flag"/>
        //     <h1>{foundCountry.name.common}</h1>
        //     <table className="table">
        //     <thead></thead>
        //         <tbody>
        //             <tr>
        //                 <td style={{width: "30%"}}>Capital</td>
        //                 <td>{foundCountry.capital[0]}</td>
        //             </tr>
        //             <tr>
        //                 <td>Capital</td>
        //                 <td>{foundCountry.area}km<sup>2</sup></td>
        //             </tr>
        //             <tr>
        //                 <td>Borders</td>
        //                 <td>
        //                     <ul>
        //                          {foundCountry.borders.map((borderCountryCode) =>{
        //                             const foundBorderCountry = countries.find((country) => {   
        //                             return country.alpha3Code === borderCountryCode
        //                             })
        //                             return (
        //                                 <Link to={"../"+foundBorderCountry.alpha3Code}>
        //                                     <li key={foundCountry.name.common+foundBorderCountry._id} style={{listStyle:"none"}}>
        //                                         {foundBorderCountry.name.common}
        //                                     </li>
        //                                 </Link>
        //                             )
        //                          })}
        //                     </ul>
        //                 </td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
    )


}

export default CountriesDetails;


              
            
                
                
        
    