import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { directus } from "../../../services/directus";

const AsideChannels = () => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const fetchChannels = async () => {
            const data = await directus.items("collection");
            const channels = await (await data.readByQuery({
                filter: {
                    "type": {
                        "_eq": "channel"
                    }
                },
                limit: -1
            }));
            setChannels(channels.data);
            console.log(channels.data);
        }
        fetchChannels();
    }, [])


    

    return (
        <div className="mb-3 w-full flex flex-col	text-homeIcon  cursor-pointer">
            <div className="flex ">
                <span>
                    <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7,18 L9,18 L9,18 C9.55228475,18 10,17.5522847 10,17 L10,13.5 L10,13.5 C10,12.3954305 10.8954305,11.5 12,11.5 L12,11.5 L12,11.5 C13.1045695,11.5 14,12.3954305 14,13.5 L14,17 L14,17 C14,17.5522847 14.4477153,18 15,18 L17,18 L17,18 C17.5522847,18 18,17.5522847 18,17 L18,10.9367499 L18,10.9367499 C18,10.3431902 17.736354,9.78029498 17.2803688,9.40030733 L12.6401844,5.533487 L12.6401844,5.533487 C12.2693384,5.22444871 11.7306616,5.22444871 11.3598156,5.533487 L6.7196312,9.40030733 L6.7196312,9.40030733 C6.26364602,9.78029498 6,10.3431902 6,10.9367499 L6,17 L6,17 C6,17.5522847 6.44771525,18 7,18 Z"></path></svg>
                </span>
                <Link to="/listChannels">Channels</Link>
            </div>
            <ul className="ml-8 pt-1">
                {/* <li><Link to="/channel"> Nouvelles </Link></li>
                <li><a href="/#">Actualite</a></li> */}
                {
                    channels.map(channel => (
                        <Link to={`/channel/${channel.id}`} state={{ name: channel.name }}>
                            <li><a key={channel.id}>{channel.name}</a></li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
}

export default AsideChannels;