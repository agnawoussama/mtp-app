import React, { useState, useEffect } from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import { directus } from '../../../../../services/directus'
import { getAssetURL } from '../../../../../utils/get-asset-url'
import { Link } from 'react-router-dom'


export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    useEffect(() => {
        fetchPosts();
    }, [])

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const data = await directus.items("Post");
        const response = await data.readByQuery({
            limit: -1
        });
        setPosts(response.data);
        console.log("fromSlider" + response.data[0].post_image);
    }

    const nextSlide = () => {
        if (slideIndex !== posts.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === posts.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(posts.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const [an, setAn] = useState(null);
    return (
        <div className="container-slider">
            {posts?.map((obj, index) => {
                return (                                 
                    <div
                        key={obj.id}                                          
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={getAssetURL(obj.post_image)}
                        />
                        <div className="description">
                            <p className='title-description'>{obj.title}</p>
                        </div>
                    </div>
                    
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <div className="container-dots">
                {Array.from({ length: posts.length }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
