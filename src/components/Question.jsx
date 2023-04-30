
const Question = ({currQus, submitted, currQusIndex, selectedOption}) => {
  return (
    <div className="">
        <h1 className="text-3xl font-bold">
            {currQus.question}
        </h1>
        <div className="flex flex-col m-3 text-xl" >
            {currQus.options.map(options => (
                <label htmlFor={options.text} id={options.text} >
                    <input type="radio" value={options.text} className='mx-2'  
                        onChange={() => {submitted(currQusIndex, options.text)}}
                        name={currQus.question}
                        checked ={options.text === selectedOption}
                    />
                    {options.text}
                </label>
            ))}
        </div>
    </div>
  )
}

export default Question