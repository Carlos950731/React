import React from "react"
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

export const HeaderContactus = () => {
    const dummyMenucontact = [
        { id: 1, text: "HOME" },
        { id: 2, text: "ABOUT" },
        { id: 3, text: "COURSES" },
        { id: 4, text: "EVENT" },
        { id: 5, text: "BLOG" },
        { id: 6, text: "CONTACT" },
        { id: 7, text: "SHOP" }

    ]

    return (
        <div className="HeaderContactus">
            <div className="header-contact">
                <div className="cont-phone">
                    <div className="icon-contact">
                        <PhoneOutlined />
                    </div>
                    <p className="phone">+124 5678 91050</p>
                    <div className="line-cont"></div>
                    <div className="icon-contact">
                        <MailOutlined />
                    </div>
                    <p className="phone">example@arges.net</p>
                </div>
                <div className="cont-login">
                    <p className="lgn-text">Login</p>
                    <div className="line-conte"></div>
                    <p className="lgn-text">Registation</p>
                    <div className="line-conte"></div>
                    <p className="lgn-text">English</p>
                </div>
            </div>
            <section className="sect-menu">
                <h1 className="title-menu">ARGES</h1>
                <div className="contenedor-menu">
                    {dummyMenucontact?.map((item, index) =>
                        <div key={index} className="cont-menu">
                            <p className="text-menu">{item.text}</p>
                            <div className="line-conter"></div>
                        </div>
                    )}
                </div>

            </section>
        </div>
    )
}
