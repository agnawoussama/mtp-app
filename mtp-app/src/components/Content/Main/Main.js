import Home from './Home/Home';
import { Routes,Route } from "react-router-dom";
import Channel from './Channels/Channel';
import ListChannels from './Channels/ListChannels';
import Annonce from './Channels/Annonce';
import SingleAnnonce from './Channels/SingleAnnonce';


const Main = () => {

    return (
        <main className="mx-auto w-9/12	 mt-20">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/listChannels" element={<ListChannels />} ></Route>
                <Route path="/channel/:idChannel" element={<Channel />}></Route>
                <Route path="/annonce/:idAnnonce" element={<SingleAnnonce />}></Route>
            </Routes>
        </main>
    );
}

export default Main;