import { getAssetURL } from "../../../../../utils/get-asset-url";
import "./AnnoncePreview.css"

const AnnoncePreview = ({ title, content, image }) => {
    
    return (
        <div>
            <div className="flex border-b-2 justify-between pb-5 mb-10">
                <div className="left-side flex flex-col flex-3">
                    <h4 className="text-lg font-bold mb-2 text-justify">{title}</h4>
                    <p className="text-justify para">{content}   </p>
                </div>
                <div className="right-side ml-6 flex-1 ">
                    <img className="rounded-md " src={getAssetURL(image)} alt="" />
                </div>
            </div>
        </div>
    );
}

export default AnnoncePreview;