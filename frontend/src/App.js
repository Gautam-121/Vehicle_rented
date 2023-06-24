import QuestionScreen from "./Components/QuestionScreen";
import React from "react";
import { useState } from "react";
import UserContext from "./utils/UserContext";


function App() {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    numberOfWheels: "",
    vehicleType: "",
    vehicleModel: ""
  })

  return (
    <>
      <UserContext.Provider
        value={
          {
            user: user,
            setUser: setUser
          }}>
        <QuestionScreen />
      </UserContext.Provider>
    </>
  )
}

export default App;
