import { useState } from "react";
import Crud from "./crud";
import LoginUser from "./login";


function App() {

  const [user,serUser]=useState("")
  // console.log(user);
 return(
  <>
  {user=="" ? <LoginUser userName={serUser} /> :  <Crud user={user} userName={serUser}/>}
  {/* <LoginUser/> */}
  </>
 )
}

export default App;
