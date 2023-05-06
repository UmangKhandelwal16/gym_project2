import 'bootstrap/dist/css/bootstrap.min.css';
import Corousel from '../../Components/Corousel/Corousel';
import Pricing from '../../Components/PricingSection/Pricing';
import Programs from '../../Components/TrainingPrograms/Programs';
import Team from '../../Components/TeamMembers/Team';
import About from '../../Components/AboutUs/AboutUs'
import Trainings from '../../Components/Blogs/Trainings';
import Register from '../../Components/Register/Register';

function Home() {
  return (
    <div className="App">
      <Corousel/>
      <About/>
      <Programs/>
      <Pricing/>
      <Trainings/>
      <Team/>
      <Register/>
    </div>
  );
}

export default Home;
