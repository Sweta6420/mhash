// import carData from '../features/data/carData'; 
// import React, { useState } from 'react';
// import '../index.css';



// function TransportationScoreCalculator() {
//     const [state, setState] = useState({
//         vehicleType: '',
//         drivenDistance: '',
//         carpooling: '',
//         fuelType: '',
//         carBrand: '',
//         score: '',
//     });

//     const calculateTransportationScore = () => {
//         const {
//             vehicleType,
//             drivenDistance,
//             carpooling,
//             fuelType,
//             carBrand,
//         } = state;

//         const efficiencyValues = {
//             bike: 65,
//             car: 25,
//             scooter: 50,
//             bus: 5,
//             train: 4,
//             plane: 0.384,
//         };

//         const capacityValues = {
//             bike: 2,
//             scooter: 2,
//             car: 8,
//             bus: 50,
//             train: 650,
//             plane: 500,
//         };

//         const emissionValues = {
//             bike: 103,
//             scooter: 90,
//             car: 140,
//             bus: 105,
//             train: 80,
//             plane: 255,
//         };

//         const vehicleTypes = {
//             diesel: 0.6,
//             petrol: 0.7,
//             cng: 0.8,
//             hybrid: 0.9,
//             ev: 1.0,
//         };
//         const carpoolFactor = carpooling === 'yes' ? 1 : 0.9;

//         let fuelEfficiency = efficiencyValues[vehicleType];
//         if (fuelType === 'ev') {
//             fuelEfficiency = carData.ev[carBrand] / 8.9;
//         }

//         const effective =
//             (fuelEfficiency * capacityValues[vehicleType] - emissionValues[vehicleType] / capacityValues[vehicleType]) /
//             drivenDistance;

//         const impact = effective * (vehicleTypes[fuelType] || 1.0) * carpoolFactor;

//         setState({ ...state, score: impact.toFixed(2) });
//     };

//     return (
//         <div className="container">
//             <h1>Transportation Score Calculator</h1>
//             <select
//                 id="vehicleType"
//                 value={state.vehicleType}
//                 onChange={(e) => setState({ ...state, vehicleType: e.target.value })}
//             >
//                 <option disabled value="">
//                     Select vehicle type
//                 </option>
//                 <option value="bike">Bike</option>
//                 <option value="scooter">Scooter</option>
//                 <option value="car">Car</option>
//                 <option value="train">Train</option>
//                 <option value="bus">Bus</option>
//                 <option value="plane">Aeroplane</option>
//             </select>
//             <input
//                 type="text"
//                 id="drivenDistance"
//                 placeholder="Enter kilometers driven today"
//                 value={state.drivenDistance}
//                 onChange={(e) => setState({ ...state, drivenDistance: e.target.value })}
//             />
//             {(state.vehicleType === 'car' || state.vehicleType === 'scooter' || state.vehicleType === 'bike') && (
//                 <div>
//                     <input
//                         type="text"
//                         id="capacity"
//                         placeholder="How many people were traveling"
//                         value={state.capacity}
//                         onChange={(e) => setState({ ...state, capacity: e.target.value })}
//                     />
//                     <select
//                         id="carpooling"
//                         value={state.carpooling}
//                         onChange={(e) => setState({ ...state, carpooling: e.target.value })}
//                     >
//                         <option disabled value="">
//                             Select carpooling
//                         </option>
//                         <option value="yes">Yes</option>
//                         <option value="no">No</option>
//                     </select>
//                 </div>
//             )}
//             <select
//                 id="fuelType"
//                 value={state.fuelType}
//                 onChange={(e) => setState({ ...state, fuelType: e.target.value })}
//             >
//                 <option disabled value="">
//                     Select fuel type
//                 </option>
//                 <option value="petrol">Petrol</option>
//                 <option value="diesel">Diesel</option>
//                 <option value="cng">CNG</option>
//                 <option value="hybrid">Hybrid</option>
//                 <option value="ev">EV</option>
//             </select>
//             {(state.vehicleType === 'car' && state.fuelType === state.fuelType) && (
//                 <select
//                     id="carBrand"
//                     value={state.carBrand}
//                     onChange={(e) => setState({ ...state, carBrand: e.target.value })}
//                 >
//                     <option disabled value="">
//                         Select car brand
//                     </option>
//                     {carData && carData[state.fuelType] &&
//                         Object.entries(carData[state.fuelType]).map(([carBrand, carEfficiency]) => (
//                             <option key={carBrand} value={carEfficiency}>
//                                 {carBrand}
//                             </option>
//                         ))}
//                 </select>
//             )}

//             <button id="calculate-button" onClick={calculateTransportationScore}>
//                 Calculate Score
//             </button>
//             <p id="score">Transportation Score = {state.score}</p>
//         </div>
//     );
// }


// export default TransportationScoreCalculator;