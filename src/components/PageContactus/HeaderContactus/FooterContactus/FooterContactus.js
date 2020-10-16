import React from "react"
import { Input } from 'antd';
import { AudioOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined, LinkedinOutlined, GooglePlusOutlined, YoutubeOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);
export const FooterContactus = () => {
    const dummyInconmap = [
        { id: 1, icon: <FacebookOutlined /> },
        { id: 2, icon: <InstagramOutlined /> },
        { id: 3, icon: <TwitterOutlined /> },
        { id: 4, icon: <LinkedinOutlined /> },
        { id: 5, icon: <GooglePlusOutlined /> },
        { id: 6, icon: <YoutubeOutlined /> }
    ]
    const dummyLinks = [
        { id: 1, title: "Admission" },
        { id: 2, title: "Support" },
        { id: 3, title: "Helpline" },
        { id: 4, title: "Information" },
        { id: 5, title: "Library" },
        { id: 6, title: "Notice" },
        { id: 7, title: "Semisters" },
        { id: 8, title: "Subjects" }
    ]
    return (
        <div className="FooterContactus">
            <div className="contenedor-footercontact">
                <div className="cont-maps">
                    <h1 className="title-map">Join Our Newsletter Now</h1>
                    <p className="parra-map">Get E-mail updates about our latest shop and special offers. Lorem Ipsum has been the industry's standard dummy text.</p>
                    <Search
                        placeholder="Enter your e-mail"
                        enterButton="SUBCRIBE"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                    <div className="conte-icon">
                        {dummyInconmap?.map((item, index) =>
                            <div key={index} className="content-iconjoin">
                                <p className="parra-mapa">{item.icon}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="cont-links">
                    <h1 className="title-links">Important Links</h1>
                    {dummyLinks?.map((item, index) =>
                        <div key={index} className="content-links">
                            <p className="parra-links">{item.title}</p>
                        </div>
                    )}
                </div>
                <div className="content-us">
                    <h1 className="title-us">Contact Us</h1>
                    <div className="linea-us"></div>
                    <div className="iconus">
                        <div className="icon-us">
                            <MailOutlined />
                        </div>
                        <p className="pa-text">arges@gmail.com</p>
                    </div>
                    <div className="linea-us"></div>
                    <div className="iconus">
                        <div className="icon-us">
                            <PhoneOutlined />
                        </div>
                        <p className="pa-text">+0123 4567 9876</p>
                    </div>
                    <div className="linea-us"></div>
                    <div className="iconus">
                        <div className="icon-us">
                            <EnvironmentOutlined />
                        </div>
                        <p className="pa-text">123 Business Avenue, NYC</p>
                    </div>
                </div>
            </div>
        </div>
    )
}