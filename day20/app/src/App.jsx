import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Tenth } from './Tenth'
import { Eleven } from './Eleven'
import { Twelth } from './Twelth'

function App() {


return (
<>


<Routes>

<Route  path='/' element={<Tenth/>} />
<Route path='/eleven' element={<Eleven/>} />
<Route path='/twelth' element={<Twelth/>}/>


</Routes>

 </>
  )
}
export default App
