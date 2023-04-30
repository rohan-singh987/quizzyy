
const WelcomeBox = ({ linkTo }) => {


  return (
    <div className='bg-[#ECC9EE] md:p-10 p-5 rounded-3xl'>
        <h1 className='font-bold md:text-4xl text-2xl'>
            Welcome to Quiz Challenge
        </h1>
        <div className='text-center my-3 md:text-xl'>
            <p>
                You will Presented 3 quiz
            </p>
            <p>
                can you solve it scoring 100%
            </p>
        </div>
        <button className='flex m-auto bg-[#F5F3C1] p-2 rounded-3xl hover:bg-[#DDFFBB] transition ease-in-out delay-150 hover:scale-110 duration-300'
        onClick={linkTo}
        >
            Start quiz
        </button>
        </div>
  )
}

export default WelcomeBox