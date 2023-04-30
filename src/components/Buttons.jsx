import React from 'react'
import { questions } from '../../questions'

const Buttons = ({ setCurrQus, currQus }) => {

    const calculateScore = () => {
        console.log("Final Submission");
    }

  return (
    <div className='flex justify-between w-1/3 md:w-1/4 py-5' >
        <button onClick={() => setCurrQus( currQus <= 0 ? currQus : currQus-1)}> 
            { currQus > 0 && 'Back'} 
        </button>


        {
            currQus < questions.length-1 ? 
        <button onClick={() => setCurrQus( currQus >= questions.length - 1 ? currQus : currQus + 1)} > 
            {"Next"}
        </button>
        :
        <button onClick={() => calculateScore()} > 
            {"Submit"}
        </button>
        }
    </div>
  )
}

export default Buttons