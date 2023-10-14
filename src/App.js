//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Carousel from './Components/carousel'
import Footer from './Components/footer'
import Boxes from './Components/boxes'
import Offhand from './Components/offhand'
function App() {
  return (
    <>
   <b><Navbar title="Medical Ninjutsu" text="Link"/></b>
   <Offhand/>
   <Carousel/>
   <Boxes/>
   <Footer/>
   
</>
  );
}

export default App;
