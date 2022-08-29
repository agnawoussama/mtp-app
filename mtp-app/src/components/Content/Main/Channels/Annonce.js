import { useEffect, useState } from "react";
import { getAssetURL } from "../../../../utils/get-asset-url"

const Annonce = ({ title, user, image, content, isSingle }) => {
    const [single, setSingle] = useState(false);

    //If it's a single annonce the image is to be big
    useEffect(()=>{
        isSingle && setSingle(true)
    },[])

    return (
        <>
            <h1 className="text-3xl mb-1">{title}</h1>
            <p className="text-sm mb-5">by {user}</p>
            <img className={`rounded-lg w-full object-cover mb-4 ${single ? "max-h-96" : "max-h-80"}`} src={getAssetURL(image)} />
            <p className={`text-justify ${single ? 'text-lg' : 'text-base'}`}>{content}</p>
        </>
    );
}

export default Annonce;