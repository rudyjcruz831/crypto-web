import Navigation from './components/Navigation'
import Info  from './components/Info'
import React, { useState, useEffect } from 'react'

function App() {
  const [crypto, setCrypto] = useState([])

  useEffect(() => {
      const getCrypto = async () => {
          try {
            const cryptoFromServer = await fetchCrypto()
            setCrypto(cryptoFromServer)
          } catch (e) {
            console.log(e)
          }
          
          // console.log("inside useEffect")
      }
      getCrypto()
  },[])

  // fetch crypto data
  const fetchCrypto = async () =>{
      const res = await fetch("https://cryptic-thicket-61793.herokuapp.com/info")
      const data = await res.json()
      console.log(data.Exchanges)
      return data
  }
  
  return (
    <div className="App">
      <Navigation/>
      <Info crypto={crypto}/>
    </div>
  );
}

export default App;
