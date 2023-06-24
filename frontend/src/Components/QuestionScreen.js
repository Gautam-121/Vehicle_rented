import { useState , useContext } from "react";
import { questions } from "../utils/helper";
import { Typography , Button  } from '@mui/material';
import UserContext from "../utils/UserContext";

const QuestionScreen = ()=>{

    const {user} = useContext(UserContext)


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isError, setIsError] = useState(false);

    const handleNextQuestion  = (event)=>{

        event.preventDefault()

        if (currentQuestion < questions.length - 1) { 

            // Check if the current question has been answered
            if (validateAnswer()) {
              setCurrentQuestion((prevQuestion) => prevQuestion + 1);
              setIsError(false);
            } else {
                setIsError(true)
            }
          }
    }

    const validateAnswer = () => {
        // Check if the current question has been answered
        switch (currentQuestion) {
          case 0:
            return user.firstName.trim() !== '' && user.lastName.trim() !== '';
          case 1:
            return user.numberOfWheels !== '';
          case 2:
            return user.vehicleType !== '';
          case 3:
            return user.vehicleModel !== '';
          case 4:
            return user.dateRange[0] !== null && user.dateRange[1] !== null;
          default:
            return true;
        }
      };
      
    const submitHandler = (e) => {

        e.preventDefault();
        // Construct the data object with user inputs
        // const data = {
        //   name: {
        //     first: firstName,
        //     last: lastName,
        //   },
        //   numOfWheels,
        //   vehicleType,
        //   vehicleModel,
        //   dateRange,
        // };
        // Send the data to the backend for booking
        // Replace the 'submitDataToBackend' function with your backend integration logic
        // submitDataToBackend(data);
      };

    return(

        <>
            <form onSubmit={submitHandler} className="flex flex-col items-center">
                <Typography variant="h6" className="mb-4">
                    {questions[currentQuestion].label}
                </Typography>
                {questions[currentQuestion].component}

                {isError && (
                    <Typography color="error" className="mb-4">
                        Please answer the current question before proceeding.
                    </Typography>
                )}

                <Button type="submit" variant="contained" color="primary" disabled={currentQuestion < questions.length - 1} className="mb-4">
                    Submit
                </Button>
                <Button variant="contained" color="primary" onClick={handleNextQuestion} className="mb-4">
                    Next
                </Button>
            </form>
        </>
    )
}

export default QuestionScreen