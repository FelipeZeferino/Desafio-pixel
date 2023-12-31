import './App.css';
import Data from './data.json'
import {useState} from 'react'
import "./SearchBar.css"
import pixellogo from './images/logopixelfull.png'
import pixelsmall from './images/pixelbsmall.png'
import SearchBar from './SearchBar';

function App() {
  const [input,setInput] = useState("")
  const valorEscolhido = Data.gateways.filter(gateway => gateway._id.includes(input));
  return (
    <div className="App">
      <div className="containerSB">
        <h1 className='plaintext'>GATEWAY SEARCH</h1>
        <div className='input-wrapper'>
          <img src={pixelsmall}className='pixellogo1'></img>
        <input className="input" value={input} placeholder='Entre com o ID do gateway'onChange={(e)=> setInput(e.target.value)}></input>
        <img src={pixellogo}alt='pixel-logo' className='bottomImage'></img>
        </div>
        <h2 className='plaintext'>Lista de Gateways</h2>
          <ul className='lista'>
            {valorEscolhido.map(gateway => (
              <li key= {gateway._id} className='plaintext' id='gatewaynome'>
                {gateway.name}
                <ul className='listadevices'>
                {gateway.devices.map(device => (
                  <li key={device._device} className='plaintext'id='bloco'>
                    {device.modelId}{' '}
                    
                    {device._device}
                    <br></br>
                    {device._device === "31" && (
      <a href="https://www.pixelti.com.br/smart-plug/">Página do produto</a>)}
                    {device._device === "33" && (
      <a href="https://www.pixelti.com.br/smart-switch/">Página do produto</a>
    )}
                  </li> 
                ))}
                </ul>
                </li>
            ))}
          </ul>
         
      </div>
    </div>
  );
}

export default App;
