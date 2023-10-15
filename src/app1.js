import './App.css';
import Data from './data.json'
import {useState} from 'react'
import "./SearchBar.css"
import pixellogo from './images/pixelgbig.png'
import pixelsmall from './images/pixelbsmall.png'

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
        </div>
        <h2 className='plaintext'>Lista de Gateways</h2>
        <table>
          <thead>
                <tr>
                    <th>Gateway</th>
                    <th>Nome do Produto</th>
                    <th>ModelId</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                {valorEscolhido.map(gateway => {
                    return (
                        <tr key= {gateway._id} className='plaintext'>
                            <td>{gateway.name}</td>
                        </tr>
                        
                    )
                    
                })}
                </tbody>
            </table>
          <ul className='lista'>
            {valorEscolhido.map(gateway => (
              <tr key= {gateway._id} className='plaintext'>
                {gateway.name}
                <ul>
                {gateway.devices.map(device => (
                  <li key={device._device} className='plaintext'>
                    {device.modelId} 
                    <br></br>
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
                </tr>
            ))}
          </ul>
          <img src={pixellogo}alt='pixel-logo' className='bottomImage'></img>
      </div>
    </div>
  );
}