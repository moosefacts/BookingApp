import React from 'react';
import "./featuredProperties.css";

export default function featuredProperties() {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://cdn.kimkim.com/files/a/images/c467aae189455da8be27eac6128c77b68ffbc40c/big-4bb79f4aa9fd863302cb56058e7946ae.jpg" alt="" className="fpImg" />
            <span className="fpName">Aravaca Garden</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $140</span>
            <div className="fpRating">
                <button>91.9</button>
                <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img src="https://res.klook.com/image/upload/Mobile/City/afmqgg5h0jl9wnr1dfmf.jpg" alt="" className="fpImg" />
            <span className="fpName">Parco Dei Principi</span>
            <span className="fpCity">Rome</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img src="https://www.travelandleisure.com/thmb/VscfMXHNO6uBpaX2cuIW1q2ZtA8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tokyo-japan-TOKYOTG0621-52012ff551dc46c4a87ac8e3151307a4.jpg" alt="" className="fpImg" />
            <span className="fpName">Royal Hotel</span>
            <span className="fpCity">Kyoto</span>
            <span className="fpPrice">Starting from $160</span>
            <div className="fpRating">
                <button>9.0</button>
                <span>Excellent</span>
            </div>
          </div>
      </div>

  )
}
