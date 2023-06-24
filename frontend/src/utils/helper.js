import Name from "../Components/Name"
import NumberWheels from "../Components/NumberWheels"
import VehicleType from "../Components/VehicleType"
import DateRange from "../Components/DateRanges"

export const questions = [

    {
        label: 'What is your name?',
        component : <Name/>
    },
    {
        label: 'Number of wheels?',
        component : <NumberWheels/>
    },
    {
        label: 'Type of vehicle?',
        component : <VehicleType/>
    },
    {
        label: 'Select the date range:',
        component : <DateRange/>
    }
]

export const userInput = {

    firstName : "My name",
    lastName : "",
    numberOfWheels : "",
    vehicleType : "",
    vehicleModel : ""


}