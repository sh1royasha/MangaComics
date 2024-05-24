import { useState,useEffect } from "react"
import { getRandonMangasRequest } from "../api/mangas.api";

const Carousel  = () => {

    const screenWidth = window.screen.width;
    
    console.log(screenWidth)

    const [cards,setCards] = useState([]);
    const [isScrollAtStart, setIsScrollAtStart] = useState(true);
    const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);

    useEffect(() => {
      const fecthData = async () =>{
        try {
            const data = await getRandonMangasRequest()
            setCards(data.body)
        }  catch (error) {
            console.log('Error al obtener los datos:', error)
          }
      }
      fecthData();

    }, [])

    const handleScroll = (amount) => {
        const containerList = document.querySelector('.image-list');
        containerList.scrollBy({
          left: amount,
          behavior: "smooth"
        });
    };

    useEffect(() => {
        const containerList = document.querySelector('.image-list');
        // // console.log(containerList)
        const handleScrollEvent = () => {
          const scrollPosition = containerList.scrollLeft;
          const maxScroll = containerList.scrollWidth - containerList.clientWidth;
  
          setIsScrollAtStart(scrollPosition <= 0);
          setIsScrollAtEnd(scrollPosition >= maxScroll);
        };
  
        handleScrollEvent(); 
  
        containerList.addEventListener('scroll', handleScrollEvent);
  
        return () => {
          containerList.removeEventListener('scroll', handleScrollEvent);
        };
    }, [cards]); 
  
   

  return (
    <div className="container">
        <div className="slider-wrapper">
            <button 
                className={`slide-button prev-slide ${isScrollAtStart ? 'inactive' : 'active'}`}
                onClick={() => handleScroll(-992)}>
                <i className='bx bx-chevron-left'></i>
            </button>
            <ul className="image-list" >
                {cards.map((card)=>(
                    <div className="imagen-container" key={card.ID}>
                        <img className="image-item" src={card.ImageURL} alt="Imagen" />
                        <div className="imagen-info">
                            <h2>{card.Title}</h2>
                            <div className="imagen-info-sipnosis">
                              
                            </div>
                        </div>
                    </div>
                    ))}
            </ul>
            <button 
                className={`slide-button next-slide ${isScrollAtEnd ? 'inactive' : 'active'}`}
                onClick={() => handleScroll(992)}>
                <i className='bx bx-chevron-right'></i>
            </button>
        </div>
    </div>
  )
}

export default Carousel 