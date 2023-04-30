import { useNavigate } from "react-router-dom"
import WelcomeBox from '../components/WelcomeBox';

const WelcomePage = () => {

    const navigate = useNavigate();

    const linkTo = () =>{
        navigate('/quiz');
    }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#ADE4DB] to-[#FFEBEB] p-2'>
        <WelcomeBox linkTo={linkTo} />
    </div>
  )
}

export default WelcomePage