import {useEffect, useState} from "react";
import {NAMES} from "./tmp/data-names.ts";

function App() {
  const [person, setPerson] = useState<string>('World')

  useEffect(() =>{
    const intervalIndex = setInterval(() => {
      const idx = Math.floor(Math.random() * NAMES.length);
      setPerson(NAMES[idx])
    }, 3000)

    return () => clearInterval(intervalIndex)
  }, [])


  return (
    <div>
      <h1>Hello, {person}!</h1>
    </div>
  )
}

export default App