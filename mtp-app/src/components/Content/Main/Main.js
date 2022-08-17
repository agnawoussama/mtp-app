import Home from './Home/Home';
import { Routes,Route } from "react-router-dom";
import Channel from './Channels/Channel/Channel';
import ListChannels from './Channels/ListChannels/ListChannels';


const Main = () => {

    return (
        <main className="mx-auto w-9/12	 mt-20">
            {/* <article className="p-5 mb-10 border drop-shadow-xl rounded-lg">
                <h1 className="text-4xl">How to use the useState hook in react</h1>
                <p className="text-sm mb-5">by Agnaou Oussama</p>
                <p className="text-justify	">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptate aut eos delectus ducimus unde porro natus eius! Officia distinctio aliquid sit nihil quaerat reiciendis maxime porro quas beatae cumque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptate aut eos delectus ducimus unde porro natus eius! Officia distinctio aliquid sit nihil quaerat reiciendis maxime porro quas beatae cumque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptate aut eos delectus ducimus unde porro natus eius! Officia distinctio aliquid sit nihil quaerat reiciendis maxime porro quas beatae cumque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptate aut eos delectus ducimus unde porro natus eius! Officia distinctio aliquid sit nihil quaerat reiciendis maxime porro quas beatae cumque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptate aut eos delectus ducimus unde porro natus eius! Officia distinctio aliquid sit nihil quaerat reiciendis maxime porro quas beatae cumque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptate aut eos delectus ducimus unde porro natus eius! Officia distinctio aliquid sit nihil quaerat reiciendis maxime porro quas beatae cumque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptate aut eos delectus ducimus unde porro natus eius! Officia distinctio aliquid sit nihil quaerat reiciendis maxime porro quas beatae cumque?</p>
            </article> */}
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/listChannels" element={<ListChannels />} ></Route>
                <Route path="/channel/:idChannel" element={<Channel />}></Route>
            </Routes>
        </main>
    );
}

export default Main;