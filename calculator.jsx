import React, { useState } from 'react';
import "./DailyCarbonFootprintCalculator.css"

function DailyCarbonFootprintCalculator() {

    const [electricityConsumption, setElectricityConsumption] = useState(0);
    const [lpgConsumption, setLpgConsumption] = useState(0);
    const [petrolConsumption, setPetrolConsumption] = useState(0);
    const [dieselConsumption, setDieselConsumption] = useState(0);
    const [carbonFootprint, setCarbonFootprint] = useState(0);
    const [acUsage, setAcUsage] = useState(0);
    const [geyserUsage, setGeyserUsage] = useState(0);
    const [refrigeratorUsage, setRefrigeratorUsage] = useState(0);
        
    const calculateCarbonFootprint = () => {
        
        const electricityEmissionFactor = 0.5; // Example value
        const lpgEmissionFactor = 2.0; // Example value
        const petrolEmissionFactor = 2.5; // Example value
        const dieselEmissionFactor = 2.8; // Example value
        const acCarbonFactor = 0.6;
        const geyserCarbonFactor = 0.8;
        const refrigeratorCarbonFactor = 0.2;
  
        const totalEmissions =
            electricityConsumption * electricityEmissionFactor +
            lpgConsumption * lpgEmissionFactor +
            petrolConsumption * petrolEmissionFactor +
            dieselConsumption * dieselEmissionFactor+acUsage * acCarbonFactor+
            geyserUsage * geyserCarbonFactor+
            refrigeratorUsage * refrigeratorCarbonFactor;

        
        setCarbonFootprint(totalEmissions);
    };

    return (
        <div>
            <h2>Daily Carbon Footprint Calculator</h2>
            <div>
                <label>Electricity Consumption (kWh):</label><br />
                <input
                    type="number"
                    value={electricityConsumption}
                    onChange={(e) => setElectricityConsumption(parseFloat(e.target.value))}
                />
            </div>
            <div>
                <label>LPG Consumption (Liters):</label><br />
                <input
                    type="number"
                    value={lpgConsumption}
                    onChange={(e) => setLpgConsumption(parseFloat(e.target.value))}
                />
            </div>
            <div>
                <label>Petrol Consumption (Liters):</label><br />
                <input
                    type="number"
                    value={petrolConsumption}
                    onChange={(e) => setPetrolConsumption(parseFloat(e.target.value))}
                />
            </div>
            <div>
                <label>Diesel Consumption (Liters):</label><br />
                <input
                    type="number"
                    value={dieselConsumption}
                    onChange={(e) => setDieselConsumption(parseFloat(e.target.value))}
                />
            </div>
            <div>
        <label htmlFor="acUsage">AC Usage (hours/day):</label><br />
        <input
          type="number"
          id="acUsage"
          value={acUsage}
          onChange={(e) => setAcUsage(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="geyserUsage">Geyser Usage (hours/day):</label><br />
        <input
          type="number"
          id="geyserUsage"
          value={geyserUsage}
          onChange={(e) => setGeyserUsage(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="refrigeratorUsage">Refrigerator Usage (hours/day):</label><br />
        <input
          type="number"
          id="refrigeratorUsage"
          value={refrigeratorUsage}
          onChange={(e) => setRefrigeratorUsage(parseInt(e.target.value))}
        />
        </div>
            <button onClick={calculateCarbonFootprint}>Calculate</button>
            {carbonFootprint > 0 && (
                <p>
                    Daily Carbon Footprint: {carbonFootprint.toFixed(2)} kg CO2
                </p>
            )}
        </div>
    );
}

export default DailyCarbonFootprintCalculator;
