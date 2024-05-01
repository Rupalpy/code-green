import { BrowserRouter , Routes ,Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import Layout from './components/Layout'; 
import Cards from "./components/Cards"

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Layout/>
      <Cards/>
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

// import CarbonScore from '../components/CarbonScore';



// const HeroSection = () => {
//   return (
//     <div className="bg-green-200 h-screen flex items-center justify-center">
//       <img src="/path/to/your/image.jpg" alt="Your Image" className="w-1/2" />
//     </div>
//   );
// };
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <HeroSection />
//       < CarbonScore/>
//     </div>
//   );
// };

// export default App;


