import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../src/Components/Shared/Navbar'
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Shared/Login/Login';
import SignUp from './Components/Shared/Login/SignUp';
import NotFound from './Components/Shared/NotFound';
import Home from './Components/Home/Home';
import Services from './Components/Home/Services';
import PrivateAuth from './Components/Shared/Login/PrivateAuth';
import Footer from './Components/Shared/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/services" element={
          <PrivateAuth>
            <Services />
          </PrivateAuth>
        }></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
