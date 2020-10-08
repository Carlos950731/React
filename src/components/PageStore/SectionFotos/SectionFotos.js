import React from "react"
import imagen1 from "../../../img/store1.png";
import imagen2 from "../../../img/store2.png";
import imagen3 from "../../../img/store3.png";
import imagen4 from "../../../img/store4.png";
import imagen5 from "../../../img/store5.png";
import imagen6 from "../../../img/store6.png";
import imagen7 from "../../../img/store7.png";
import imagen8 from "../../../img/store8.png";
export const SectionFotos = () => {
    const dummyFotos = [
        { id: 1, img: imagen1, titulo: "Accessories, Livingroom", texto: "Auctor SEm Argu", precio: "$100.00" },
        { id: 2, img: imagen2, titulo: "Clothing, Laptops & Desktops", texto: "Duis Bibendum Impetus", precio: "$50.00" },
        { id: 3, img: imagen3, titulo: "Clothing, Laptops & Desktops", texto: "Fusce Dolor Enim No", precio: "$40.00" },
        { id: 4, img: imagen4, titulo: "Clothing, Mobiles & Tablets", texto: "Integer Eget Augue Audire", precio: "$100.00" },
        { id: 5, img: imagen5, titulo: "Accessories, Bedroom", texto: "Commodo Dolor Elitr Omnium", precio: "$80.00" },
        { id: 6, img: imagen6, titulo: "Clothing, Laptops & Desktops", texto: "Eleifend Quam Nonumy", precio: "$115.00" },
        { id: 7, img: imagen7, titulo: "Clothing, Mobiles & Tablets", texto: "Fusce Tempor Volu", precio: "$55.00" },
        { id: 8, img: imagen8, titulo: "Clothing, Laptops & Desktops", texto: "Ipsum Imperdie Omittam Inciderint", precio: "100.00" },
        { id: 9, img: imagen3, titulo: "Clothing, Laptops & Desktops", texto: "Ipsum Imperdie Omittam Inciderint", precio: "100.00" }
    ]

    return (
        <div className="SectionFotos">
            <div  className="contenedor-fotos">
                {dummyFotos?.map((item, index) =>
                    <div key={index} className="card">
                        <img className="sect-fotos" src={item.img} />
                        <p className="p-text">{item.titulo}</p>
                        <p className="parra-text">{item.texto}</p>
                        <p className="parra-precio">{item.precio}</p>
                    </div>
                )}
            </div>
        </div>
    )

}
