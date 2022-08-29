import DernierAnnonces from "./DernierAnnonces/DernierAnnonces";
import Slider from "./Slider/Slider";

const Home = () => {
    return ( 
        <div className="max-w-screen-md m-auto">
            <Slider />
            <DernierAnnonces />
        </div>
     );
}
 
export default Home;