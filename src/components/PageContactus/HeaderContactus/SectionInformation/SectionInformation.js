import React from "react"
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

export const Sectioninfo = () => {

    return (
        <div className="Sectioninfo">
            <div className="fond-info">
                <h1 className="title-info">Contact Informations</h1>
                <p className="parra-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="button-info">CONTACT US</button>
            </div>
            <div className="sect-formulario">
                <div className="content-formulario">
                    <div className="content-info">
                        <div className="content-cuadro">
                            <div className="icon-text">
                                <PhoneOutlined />
                            </div>
                            <div className="cont-text">
                                <h1 className="title-text">Phone Number</h1>
                                <p className="pa-text">+0123 4567 9876</p>
                            </div>
                        </div>
                        <div className="content-cuadro">
                            <div className="icon-text">
                                <MailOutlined />
                            </div>
                            <div className="cont-text">
                                <h1 className="title-text">Email Address</h1>
                                <p className="pa-text">arges@gmail.com</p>
                            </div>
                        </div>
                        <div className="content-cuadro">
                            <div className="icon-text">
                                <PhoneOutlined />
                            </div>
                            <div className="cont-text">
                                <h1 className="title-text">Fax Address</h1>
                                <p className="pa-text">+0123 4567 9876</p>
                            </div>
                        </div>
                        <div className="content-cuadro">
                            <div className="icon-text">
                                <EnvironmentOutlined />
                            </div>
                            <div className="cont-text">
                                <h1 className="title-text">Location</h1>
                                <p className="pa-text">123 Business Avenue, NYC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
