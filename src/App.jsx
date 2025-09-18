import { useState } from 'react';
import Semaforo from './semaforo';
import './App.css'

function App() {
  const [colorSemaforo, setColorSemaforo] = useState('#FF0000');

  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center">
      <h1 className="mb-4 mt-4">SEMÁFORO</h1>
      <h2 className="mb-4" style={{ color: colorSemaforo }}>COLOR</h2>
      <Semaforo setColorSemaforo={setColorSemaforo} />
    </div>
  )
}

export default App