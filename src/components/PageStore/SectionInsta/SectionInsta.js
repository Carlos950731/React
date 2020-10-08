import Item from "antd/lib/list/Item";
import React from "react"
import  insta1  from "../../../img/insta1.png";
import insta2  from "../../../img/insta2.png";
import  insta3  from "../../../img/insta3.png";
import  insta4  from "../../../img/insta4.png";
import  insta5  from "../../../img/insta5.png";

export const SectionInsta = () => {
    const dummyInsta = [
        { id: 1, img: insta1 },
        { id: 2, img: insta2 },
        { id: 3, img: insta3 },
        { id: 4, img: insta4 },
        { id: 5, img: insta5 }
    ]
    return (
        <div className="SectionInsta">
            <div className="contenedor-insta">
                <h1 className="title-insta">Follow us On Instagram</h1>
                <div className="linea-insta"></div>
                <p className="parra-insta">Displays an Instagram feed of your photos from your Instagram account on your website.</p>
                <div className="cont-imginsta">
                {dummyInsta?.map((item, index) =>
                    <div key={index} className="content-imginsta">
                        <img className="img-insta" src={item.img} />
                    </div>
                )}
                </div>
                
            </div>
           
        </div>
    )
}