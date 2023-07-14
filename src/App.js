// import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";

// function App(){
//   return (
//     // <div>
//     // <h1>React</h1>
//     // <p>helloooooooooooo</p>
//     // </div>

//     <>
//     <h1 className="bg-primary">React</h1>
//     <p>Hello Everyone.</p>
//     </>
//   );
// }
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Dest from './Components/Dest';
const App=()=>{
  return(
  <>
  <BrowserRouter>
  <Navbar></Navbar>
   <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/destination" element={<Dest/>}></Route>
   </Routes>
  </BrowserRouter>
  </>
  )
  }

export default App;