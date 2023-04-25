import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://www.fairmont.com/assets/0/104/3081/3086/4231/4232/ea898285-e766-4579-a708-ba3b89fbf134.jpg"
    },
    {
      src: "https://www.fairmont.com/assets/0/104/3081/3086/4231/4232/0273a866-109f-4179-8903-4f580a1845c6.jpg"
    },
    {
      src: "https://www.fairmont.com/assets/0/104/3081/3086/4231/4232/f8d0189d-a6b9-4190-ac81-70c931c99a34.jpg"
    },
    {
      src: "https://www.fairmont.com/assets/0/104/3081/3086/4231/4232/6beef40a-cb5b-4aaf-9261-d5fb08303665.jpg"
    },
    {
      src: "https://www.fairmont.com/assets/0/104/3081/3086/4231/4232/9011f9c8-c981-47c7-b399-cff736b6de28.jpg"
    },
    {
      src: "https://www.fairmont.com/assets/0/104/3081/3086/4231/4232/92909ac0-c7d0-4c82-b44e-5f5fc39643eb.jpg"
    }
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction==="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accomodations with air conditinioning and free WiFi. The units come with hardwood floors and
                feature a fully equipped kichenette with a microwave, a flat-screen TV, and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea 
                pot and a coffee machine. Popular points of interest near the apartment include Cloth Hall, Main Market Square, and Town Hall Tower. The nearest airport is John Paul II International Krakow-Balice,
                16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
