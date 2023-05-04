import 'bootstrap/dist/css/bootstrap.min.css';
import Corousel from '../../Components/Corousel/Corousel';
import Pricing from '../../Components/PricingSection/Pricing';
import Programs from '../../Components/TrainingPrograms/Programs';
import Blogs from '../../Components/Blogs/Blogs';
import TrainingTeam from '../../Components/TeamMembers/TrainingTeam';
import About from '../../Components/AboutUs/AboutUs';

function Home() {
  return (
    <div className="App">
      <Corousel/>
      <About/>
      <Programs/>
      <Pricing/>
      <Blogs/>
      <TrainingTeam/>
    </div>
  );
}

export default Home;
