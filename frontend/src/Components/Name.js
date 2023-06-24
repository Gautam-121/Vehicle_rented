import { useState , useContext} from "react"
import { TextField } from '@mui/material';
import UserContext from "../utils/UserContext";




// const Name = ()=>{

//     const navigate = useNavigate()

//     const [values , setValues] = useState({
//         firstName : "",
//         lastName : ""
//     })

//     const [errors , setErrors] = useState({})

//     const changeHandler = (event)=>{

//         const name = event.target.name
//         const value = event.target.value

//         setValues({...values , [name] : value})
//     }

//     const submitHandler = (event)=>{
//         event.preventDefault()
//         setErrors((values))
//     }

//     if(errors?.firstName?.length === 0 && errors?.firstName?.length === 0){

//         navigate("/numberOfWheel")
//     }

//     return(
//         <div>
//             <form action="" onSubmit={submitHandler}>
//                 <div>
//                     <label htmlFor="firstNmae">First Name</label>
//                     <input type="text" name="firstName" placeholder="First Name" onChange={changeHandler}/>
//                 </div>
//                 <div>
//                     <label htmlFor="lastName">Last Name</label>
//                     <input type="text" name="lastName" placeholder="First Name" onChange={changeHandler}/>
//                 </div>
//                 <button>Next</button>
//             </form>
//         </div>
//     )
// }

const Name = () => {

    const {user , setUser} = useContext(UserContext)

    const [firstName , setFirstName] = useState("")
    const [lastName ,  setLastName] = useState("")

    console.log(firstName)

    

    const changeFirstNameHandler = (e)=>{

            setFirstName(e.target.value)
            setUser({...user , firstName : e.target.value})
    }

    const changeLastNameHandler = (e)=>{

        setLastName(e.target.value)
        setUser({...user , lastName : e.target.value})
    }

    console.log(user)

    return (
        <>
            <TextField
                label="First Name"
                variant="standard"
                value={firstName}
                onChange={ changeFirstNameHandler}
                required
            />
            <TextField
                label="Last Name"
                variant="standard"
                value={lastName}
                onChange={changeLastNameHandler}
            />
        </>
    )
}

export default Name


