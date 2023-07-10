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
import home from './components/home';
import contact from './components/contact';
import about from './components/about';
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import navbar from './components/navbar';
const App=()=>{
  <BrowserRouter>
  <Navbar></Navbar>
   <Routes>
     <Route path="/" element={<home/>}></Route>
     <Route path="/about" element={<about/>}></Route>
     <Route path="/contact" element={<contact/>}></Route>
   </Routes>
  </BrowserRouter>

 )


}

export default App;