import { useState , useEffect, useContext } from "react"
import { RadioGroup , FormControlLabel , Radio  } from '@mui/material';
import UserContext from "../utils/UserContext";



const VehicleTypes = ()=>{

  const {user , setUser} = useContext(UserContext)

    const [vehicleType , setVehicleType] = useState("")
    const [vehicleDetail , setVehicleDetail] = useState([])
    const [filterData , setFilterData] =  useState([])
    const [vehicleModel , setVehicleModel] = useState('')

    useEffect(()=>{
        getVehicleData()
    },[])

    console.log(user)
    async function getVehicleData(){

        const data = await fetch(
          "http://localhost:4000/api/v1/getVehicle"
          )
        
        const jsonData = await data.json()

        console.log(jsonData.vehicleInfo)

        const filtrate = jsonData?.vehicleInfo.filter(value  => value.numberOfWheels === user.numberOfWheels)

        setVehicleDetail(filtrate)
        setFilterData(filterData)
    }

    const changeHandler = (event)=>{

        setVehicleType(event.target.value)

        const filterVehicle = vehicleDetail.filter(vehicle => {
            return vehicle.vehicleType === vehicleType
        })
        setFilterData(filterVehicle)
    }

    console.log(vehicleType)

    return vehicleDetail.length === 0 ? null : (
        <>
          <RadioGroup
          aria-label="Type of Vehicle"
          name="vehicleType"
          value={vehicleType}
          onChange={changeHandler}
          required
        >
          {/* Render the vehicle types based on the user selection */}
          {/* Replace 'vehicleTypes' with your actual list */}
          {vehicleDetail.map((type) => (
             <FormControlLabel key={type._id} value={type.vehicleType} control={<Radio />} label={type.vehicleType} />
          ))}
        </RadioGroup>

        {vehicleType.length === 0  ? null : 
    <RadioGroup
     aria-label="Type of Vehicle"
     name="vehicleModel"
     defaultValue={vehicleModel}
     onChange={(e) => setVehicleModel(e.target.value)}
     required
     className="mb-4"
   >
     {/* Render the vehicle types based on the user selection */}
     {/* Replace 'vehicleTypes' with your actual list */}
     {filterData.map((type) => (
       <FormControlLabel
         key={type._id}
         value={type.vehicleModel}
         control={<Radio />}
         label={type.vehicleModel}
         className="mr-4"
       />
     ))}
   </RadioGroup>
} : 
{""}
        </>
    )
}

export default VehicleTypes

