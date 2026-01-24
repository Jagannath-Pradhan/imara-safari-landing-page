import { Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/landingPage/LandingPage'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  )
}

export default App