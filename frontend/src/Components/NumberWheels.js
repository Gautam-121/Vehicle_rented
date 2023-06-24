import { useContext, useState  } from "react";
import { RadioGroup , FormControlLabel , Radio  } from '@mui/material';
import UserContext from "../utils/UserContext";


const Wheels = ()=>{

  const  {user , setUser} = useContext(UserContext)

    const [numberOfWheels , setNumberOfWheels] = useState('')

    console.log(numberOfWheels)

    const changeHandler = (e)=>{

      setNumberOfWheels(e.target.value)
      setUser({...user , numberOfWheels : e.target.value})
    }

    return(
        <>
        <RadioGroup
          aria-label="Number of Wheels"
          name="numOfWheels"
          value={numberOfWheels}
          onChange={changeHandler}
          required
        >
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
        </RadioGroup>
        </>
    )
}

export default Wheels