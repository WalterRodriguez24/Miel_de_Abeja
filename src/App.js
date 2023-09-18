import './App.css';
import Hero from './components/Hero'
import Programs from './components/programs/Programs';
import Reasons from './components/Reasons/Reasons'
import Planst from './components/Plans/Plans'
import Testimonial from './components/Testimonials/Testimonials'
import Join from '../src/components/Join/Join'
import Footer from '../src/components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Testimonial/>
      <Join/>
      <Footer/>

    </div>
  );
}

export default App;
