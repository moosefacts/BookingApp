import React from 'react';
import "./propertyList.css";

export default function PropertyList() {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/master/pass/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://media-cdn.tripadvisor.com/media/vr-splice-j/09/1f/7e/d1.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Villas</h1>
            <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://offloadmedia.feverup.com/secretseattle.co/wp-content/uploads/2021/06/19053601/shutterstock_317055716-1024x683.png" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>233 Hotels</h2>
        </div>
      </div>
    </div>
  )
}
