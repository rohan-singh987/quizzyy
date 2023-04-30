import { Routes, Route } from "react-router-dom"
import QuizzPage from "./pages/QuizzPage"
import ScorePage from "./pages/ScorePage"
import WelcomePage from "./pages/WelcomePage"

const App = () => {
  return (
    < >

      <Routes>
        <Route path="/" element={<WelcomePage />}  />
        <Route path="/quiz" element={<QuizzPage />} />
        <Route path="/score" element={<ScorePage />} />
      </Routes>

    </>
  )
}

export default App