//import ChannelPost from "./ChannelPost/ChannelPost";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { directus } from "../../../../../services/directus";
import { getAssetURL } from "../../../../../utils/get-asset-url"
import { useLocation } from 'react-router-dom';
//REACT_APP_DIRECTUS_URL=

const Channel = () => {
    let { idChannel } = useParams();
    const [posts, setPosts] = useState([]);
    const location = useLocation();
    const nameChannel = location.state.name;
    useEffect(() => {
        //Fetch posts with a specific id channel
        const fetchPosts = async () => {
            const data = await directus.items("Post");
            const posts = await (await data.readByQuery({
                filter: {
                    posts_collection: idChannel
                },
                limit: -1
            }));
            setPosts(posts.data);
            console.log(posts.data);
        }
        fetchPosts();
    }, [idChannel])

    


    return (
        <>
            <h2 className="text-2xl font-semibold ml-2 mb-4">{nameChannel}</h2>
            {posts.map(post => (
                <div className="p-6 mb-10 border drop-shadow-xl rounded-lg">
                    <h1 className="text-4xl mb-1">{post.title}</h1>
                    <p className="text-sm mb-5">by {post.user_created}</p>
                    {/* <img className="rounded-lg w-full h-72 object-cover"  src={getAssetURL(post.post_image)}  /> */}
                    <p className="text-justify	">{post.content}</p>
                </div>
            ))}
        </>
    );
}

export default Channel;