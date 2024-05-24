import 'css.gg/icons/css/heart.css'
import 'css.gg/icons/css/shopping-cart.css'
import { useState } from 'react';

const Manga = ({manga})=>{
    const {Title,Price,ImageURL} = manga;
    const [favorite,setFavorite] = useState(false)

    const handeleClick = ()=>{
        setFavorite(!favorite);
    }

    return (
        <div className="manga-container">
            <div className="manga-img">
                <img src={ImageURL} alt="manga-img" />
                <div className="favorite" onClick={handeleClick}>
                    {favorite ? (
                        <i className='bx bxs-heart'></i>
                    ) : (
                        <i className='bx bx-heart'></i>
                    )}
                </div>
            </div>
            <div className="manga-details">
                <div className="manga-title">
                    <p title={Title}>{Title}</p>
                    <small>${Price}</small>
                </div>
                <div className="manga-buttons">
                    <button type='button' className='add-to-cart'>
                        <i className='bx bx-cart'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Manga