import { createContext } from "react";

const UserContext = createContext({
  user: {
    firstName : "",
    lastName : "",
    numberOfWheels : "",
    vehicleType : "",
    vehicleModel : ""
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
