import { useState } from 'react'
import FormikUse from './components/FormikUse'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>KWA</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <FormikUse />
    </>
  )
}

export default App
