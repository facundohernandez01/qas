import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
            <Button variant="contained">h World</Button>
    </div>
  )
}

export default App
