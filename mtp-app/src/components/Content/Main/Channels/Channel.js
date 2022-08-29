//import ChannelPost from "./ChannelPost/ChannelPost";
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { directus } from "../../../../services/directus";
import { useLocation } from 'react-router-dom';
import Annonce from "./Annonce";
import AnnonceCard from "./AnnonceCard";
//REACT_APP_DIRECTUS_URL=

const Channel = () => {
    let { idChannel } = useParams();
    const [annonces, setAnnonces] = useState([]);
    const [user, setUser] = useState(null);
    const location = useLocation();
    const nameChannel = location.state.name;

    //Get the user first Name by a given id
    useEffect(() => {
        const fetchUsers = async () => {
            const data = await directus.users;
            const username = await data.readOne('78458bcf-9266-49f6-88ae-992d195294eb')
            setUser(username.first_name +" " +username.last_name);
        }
        fetchUsers()
    }, []);


    useEffect(() => {
        //Fetch annonces with a specific id channel
        const fetchAnnonces = async () => {
            const data = await directus.items("Post");
            const posts = await data.readByQuery({
                filter: {
                    posts_collection: idChannel
                },
                limit: -1
            });
            setAnnonces(posts.data);
        }
        fetchAnnonces();
    }, [idChannel])


    return (
        <div className="m-auto max-w-screen-md">
            <h2 className="text-2xl font-semibold ml-2 mb-4">{nameChannel}</h2>
            {annonces?.map(annonce => (
                <Link to={`/annonce/${annonce.id}`}>
                    <AnnonceCard>
                        <Annonce key={annonce.id} title={annonce.title} user={user} image={annonce.post_image} content={annonce.content} />
                    </AnnonceCard>
                </Link>
            ))}
        </div>
    );
}

export default Channel;