import ChannelPreview from "./ChannelPreview";
import { useState, useEffect } from "react";
import { directus } from "../../../../../services/directus";
import { Link } from "react-router-dom";

const ListChannels = () => {

    useEffect(() => {
        fetchChannels();
    }, [])

    const [collection, setCollection] = useState([]);

    const fetchChannels = async () => {
        const data = await directus.items("collection");
        const collection = await (await data.readByQuery({
            filter: {
                "type": {
                    "_eq": "channel"
                }
            },
            limit: -1
        }));
        setCollection(collection.data);
        console.log(collection.data);
    }



    return (
        <div>
            <div className="flex items-center mb-4">
                <svg
                    width="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 4V20H24V4H0ZM10 12C10 9.79086 8.20914 8 6 8H4V16H6C8.20914 16 10 14.2091 10 12ZM18 16H20V8H18C15.7909 8 14 9.79086 14 12C14 14.2091 15.7909 16 18 16Z"
                        fill="#858c88"
                    />
                </svg>
                <h2 className="text-2xl font-semibold ml-2">Liste des Channels</h2>
            </div>
            <div class="grid grid-cols-4 gap-8">
                {
                    collection.map(col => (
                        <Link to={`/channel/${col.id}`} state={{name: col.name}}>
                            <ChannelPreview key={col.id} title={col.name} />
                        </Link>
                    ))
                }

            </div>
        </div>
    );
}

export default ListChannels;