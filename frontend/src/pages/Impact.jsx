import carData from '../features/data/carData'; 
import React, { useState,useEffect } from 'react';
import '../index.css';
// import axios from 'axios'

// import {
//     Chart,
//     ChartTitle,
//     ChartTooltip,
//     ChartXAxis,
//     ChartXAxisItem,
//     ChartYAxis,
//     ChartYAxisItem,
//     ChartSeries,
//     ChartSeriesItem,
//   } from "@progress/kendo-react-charts";
//   import "hammerjs";
//   import data from "./scatter-line-data.json";
  
function TransportationScoreCalculator() 
{
    const [oldUserDataScore,setOldUserDataScore] = useState([{}])
    useEffect(() => {
        // Fetch data when the component mounts
        fetch('/api/endpoint/')
          .then((response) => response.json())
          .then((data) => {
            setOldUserDataScore(...data);
          })
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
    const [state, setState] = useState({
        vehicleType: '',
        drivenDistance: '',
        carpooling: '',
        fuelType: '',
        carBrand: '',
        score: '',
    });

    const calculateTransportationScore = () => {
        const {
          vehicleType,
          drivenDistance,
          carpooling,
          fuelType,
          carBrand,
        } = state;
      
        const efficiencyValues = {
          bike: 65,
          car: 25,
          scooter: 50,
          bus: 5,
          train: 4,
          plane: 0.384,
        };
      
        const capacityValues = {
          bike: 2,
          scooter: 2,
          car: 8,
          bus: 50,
          train: 650,
          plane: 500,
        };
      
        const emissionValues = {
          bike: 0.9,
          scooter: 0.8,
          car: 1.0,
          bus: 0.4,
          train: 0.15,
          plane: 2.5,
        };
      
        const vehicleTypes = {
          diesel: 0.6,
          petrol: 0.7,
          cng: 0.8,
          hybrid: 0.9,
          ev: 1.0,
        };
      
        const carpoolFactor = carpooling === 'yes' ? 1 : 0.9;
      
        let fuelEfficiency = efficiencyValues[vehicleType];
      
        if (carBrand && carData[fuelType] && carData[fuelType][carBrand]) {
          fuelEfficiency = carData[fuelType][carBrand];
        }
      
        const effective = (fuelEfficiency * capacityValues[vehicleType]) / drivenDistance + emissionValues[vehicleType];
        const impact = effective * (vehicleTypes[fuelType] || 1.0) * carpoolFactor;
      
        setState({ ...state, score: impact.toFixed(2) });
    }
        const normalizeScore = (score) => {
            const minScore = 0; // Replace with the actual minimum score
            const maxScore = 201; // Replace with the actual maximum score
            return (score - minScore) / (maxScore - minScore) * 100;
        }

        
        // oldUserDataScore.user.transport = normalizeScore(state.score);
        // axios.post('/api/endpoint', oldUserDataScore)
        //     .then((response) => {
        //     console.log('Data posted successfully:', response.data);
        //     })
        //     .catch((error) => {
        //     console.error('Error:', error);
        //     });
        
        return (
        <div className="container-impact-class">
            <h1 className='transportation-score-h1-class'>Transportation Score Calculator</h1>
            <select
                id="vehicleType"
                value={state.vehicleType}
                onChange={(e) => setState({ ...state, vehicleType: e.target.value })}
                className='select-input-button-impact select-input-impact'
            >
                <option disabled value="">
                    Select vehicle type
                </option>
                <option value="bike">Bike</option>
                <option value="scooter">Scooter</option>
                <option value="car">Car</option>
                <option value="train">Train</option>
                <option value="bus">Bus</option>
                <option value="plane">Aeroplane</option>
            </select>
            <input
                className='select-input-button-impact select-input-impact'
                type="text"
                id="drivenDistance"
                placeholder="Enter kilometers driven today"
                value={state.drivenDistance}
                onChange={(e) => setState({ ...state, drivenDistance: e.target.value })}
            />
            {(state.vehicleType === 'car' || state.vehicleType === 'scooter' || state.vehicleType === 'bike') && (
                <div>
                    <input
                        className='select-input-button-impact select-input-impact'
                        type="text"
                        id="capacity"
                        placeholder="How many people were traveling"
                        value={state.capacity}
                        onChange={(e) => setState({ ...state, capacity: e.target.value })}
                    />
                    <select
                        className='select-input-button-impact select-input-impact'
                        id="carpooling"
                        value={state.carpooling}
                        onChange={(e) => setState({ ...state, carpooling: e.target.value })}
                    >
                        <option disabled value="">
                            Select carpooling
                        </option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            )}
            <select
                className='select-input-button-impact select-input-impact'
                id="fuelType"
                value={state.fuelType}
                onChange={(e) => setState({ ...state, fuelType: e.target.value })}
            >
                <option disabled value="">
                    Select fuel type
                </option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="cng">CNG</option>
                <option value="hybrid">Hybrid</option>
                <option value="ev">EV</option>
            </select>
            {(state.vehicleType === 'car') && (
                <select
                    className='select-input-button-impact select-input-impact'
                    id="carBrand"
                    value={state.carBrand}
                    onChange={(e) => setState({ ...state, carBrand: e.target.value })}
                >
                    <option disabled value="">
                        Select car brand
                    </option>
                    {carData && carData[state.fuelType] &&
                        Object.entries(carData[state.fuelType]).map(([carBrand, carEfficiency]) => (
                            <option key={carBrand} value={carEfficiency}>
                                {carBrand}
                            </option>
                        ))}
                </select>
            )}

            <button id="calculate-button" className='select-input-button-impact button-impact'onClick={calculateTransportationScore}>
                Submit
            </button>
            <p id="score" className='transportation-score-impact'>Transportation Score = {normalizeScore(state.score)}</p>
        </div>
    );
}


export default TransportationScoreCalculator;