import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { directus } from '../../../../services/directus';
import Annonce from './Annonce';

function SingleAnnonce() {
    let { idAnnonce } = useParams();
    const [annonce, setAnnonce] = useState([]);
    const [user, setUser] = useState('');

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
        //Fetch one annonce with a specific id channel
        const fetchAnnonce = async () => {
            const data = await directus.items("Post").readOne(idAnnonce);
            //console.log(data);
            setAnnonce(data);
        }
        fetchAnnonce();
    }, [])

  return (
    <div className='max-w-screen-lg m-auto'>
        <Annonce isSingle={true} key={annonce.id} title={annonce.title} user={user} image={annonce.post_image} content={annonce.content} />
    </div>
  )
}

export default SingleAnnonce