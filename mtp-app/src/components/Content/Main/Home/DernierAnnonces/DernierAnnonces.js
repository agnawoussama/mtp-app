import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { directus } from "../../../../../services/directus";
import AnnoncePreview from "./AnnoncePreview";

const DernierAnnonces = () => {
    useEffect(() => {
        fetchAnnonces();
    }, [])

    const [annonces, setAnnonces] = useState([]);

    //Fetch and retrieve the ids of the channels only
    const fetchChannels = async () => {
        const data = await directus.items("collection");
        const cols = await data.readByQuery({
            filter: {
                "type": "channel"
            }
        })
        return cols.data.map(col => col.id);
    }

    const fetchAnnonces = async () => {
        const data = await directus.items("Post");
        const anncs = await data.readByQuery({
            filter: {
                "posts_collection": {
                    "id": {
                        "_in": await fetchChannels()
                    }
                }
            },
            limit: -1
        });
        setAnnonces(anncs.data);
        console.log();
    }
    return (
        <div>
            <p className="text-2xl tracking-wider mb-6 mt-10">Dernier Annonces</p>
            {
                annonces.map(ann => (
                    <Link to={`/annonce/${ann.id}`}>
                        <AnnoncePreview key={ann.id} title={ann.title} content={ann.content} image={ann.post_image} />
                    </Link>
                ))
            }
        </div>
    );
}

export default DernierAnnonces;