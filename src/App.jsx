import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormHeader } from './Components/FormHeader/FormHeader'
import { InputText } from './Components/InputText/InputText'
import { InputTextPass } from './Components/InputTextPass/InputTextPass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="form">
    <FormHeader></FormHeader>
    <div className='inputRow'>
      <InputText name={"First Name"} id={"FirstName"} placeholder={"Jhon"}>
      </InputText>
      <InputText name={"Last Name"} id={"LastName"} placeholder={"Doe"}>
      </InputText>
    </div>
    <div className='inputRow'>
      <InputText name={"Email"} id={"Email"} placeholder={"jhon.doe@example.com"}>
      </InputText>
    </div>
    <div className='inputRow'>
      <InputText name={"Phone"} id={"Phone"} placeholder={"+1 (555) 000-0000"}>
      </InputText>
    </div>
    <div className='inputRow'>
      <InputTextPass name={"Password"} id={"Password"} placeholder={"Password"}>
      </InputTextPass>
    </div>
    <div className='inputRow'>
      <InputTextPass name={"Confirm Password"} id={"ConfirmPassword"} placeholder={"Confirm Password"}>
      </InputTextPass>
    </div>
    <button type="submit">Register</button>
    </div>
  )
}




export default App
