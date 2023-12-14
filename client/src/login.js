import TextField from "@mui/material/TextField";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import Button from '@mui/joy/Button';

const LoginUser = ({userName}) => {
  // const [user, setUser] = useState("");
  // const [pass, setPass] = useState("");
  const[body,setBody]=useState({user:'',pass:''}); //estos nombres "user" "pass" tratar de que sean iguales a los name del input
  const [error, setError] = useState(false);
  const [spinner,setSpinner]=useState(false);


  const inputChange=({target})=>{
    const {name,value}=target;
    setBody({...body,[name]:value})//actualiza  los datos: es decir el name del input:valor del input
   
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios("http://localhost:3001/getLogin").then((response) => {
      const data = response.data;
      data.map((x) => {
        if (body.user !== x.user || body.pass !== x.password) {setError(true)} 
        else {
          setError(false); 
          setSpinner(true)

          setTimeout(()=>{
            userName(body.user)
          },3000)

        };
      });
    
    });
    // console.log(e);
    
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <span className="pass"> {error ? "*Datos erroneos" : ""} </span>
        <TextField
          id="outlined-bassicu"
          label="User"
          variant="outlined"
          required
          value={body.user}
          onChange={inputChange}
          name="user"
          className={error ? "red" :""}
        />
       

        <TextField
          id="outlined-bassicp"
          label="Password"
          variant="outlined"
          type="password"
          value={body.pass}
          onChange={inputChange}
          name="pass"
          className={error ? "red" :""}
          required
        />
       

        <button>Ingresar</button>

        {spinner ?  <Button loading loadingPosition="start">
            Ingresando...
          </Button> :""}
      </form>
    </div>
  );
};

export default LoginUser;
