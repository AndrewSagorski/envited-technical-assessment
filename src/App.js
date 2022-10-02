import Home from './Home';
import CreateEvent from './CreateEvent';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />}>
//           {/* <Route index element={<Home />} /> */}
//           <Route path="/create_event" element={<CreateEvent />} />
//           {/* <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} /> */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

function App() {
  return (
    <div className='App'>
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
