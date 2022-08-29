const AnnonceCard = (props) => {
    return ( 
        <div className="p-6 mb-10 border drop-shadow-xl rounded-lg">
            {props.children}
        </div>
     );
}
 
export default AnnonceCard;