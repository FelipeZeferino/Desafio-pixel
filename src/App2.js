import React, { useState } from 'react';
import './App.css';
import data from './data.json';

function App() {
  const [searchId, setSearchId] = useState(''); // To manage the search input
  const [filteredGateway, setFilteredGateway] = useState(null); // To manage the filtered data

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchId(value);

    // Filter the data based on the ID entered
    const foundGateway = data.gateways.find(gateway => gateway._id === value);
    setFilteredGateway(foundGateway);
  };

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Enter Gateway ID..." 
        value={searchId}
        onChange={handleSearchChange}
      />

      {filteredGateway && (
        <div>
          <h2>{filteredGateway.name}</h2>
          <ul>
            {filteredGateway.devices.map(device => (
              <li key={device._device}>{device.modelId}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
