import React from 'react';
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://travelnevada.com/wp-content/uploads/2020/09/Reno_Desktop-scaled.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Reno</h1>
            <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/austin2_copy_1__211bcd0d-a354-4c0f-8203-107ad7774905.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>532 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
