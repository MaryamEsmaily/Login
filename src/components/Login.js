import {useState} from "react"
import axios from "axios"
import { store } from 'react-notifications-component';

function Login() {

  const [mobileNumber, setMobileNumber] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post("http://45.159.196.58:4041/api/Users/Login",
      {mobileNumber, password})
    .then((res)=>{
      console.log(res.data.access_token)
    })
    .catch((err)=>{
      if(err.response.status === 400){
        store.addNotification({
          title: "Error",
          message: "You have entered an invalid mobile number or password.",
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000
            }
      })}
    })
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>LOGIN</h2>

        <div>
          <label>Mobile number:</label>
          <input type="text" 
          value={mobileNumber}
          onChange={(e)=>setMobileNumber(e.target.value)} />
        </div>

        <div>
          <label >Password:</label>
          <input type="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)} />
        </div>
        
        <div>
          <button type="submit" >Login</button>
        </div>
      </form>
    </div>
  );

}

export default Login


