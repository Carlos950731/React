import React from "react"

export const Signup = () => {
    return (
        <div className="Signup">
            <div className="container-signup">
                <div className="empresario-fond"></div>
                <div className="contenedor-formulario">
                    <h1 className="title-formu">WELCOME TO ARGES</h1>
                    <p className="parra-formu">Lest get you all set up so you can verify your nonprofit and begin setting up your first canpaign!</p>
                    <div className="text-pp">
                        <p className="text-p1">Already have an account?</p>
                        <p className="text-p2">Log in.</p>
                    </div>
                    <div className="formu-input">
                        <div className="input-box1">
                            <label className="labelp">NAME:</label>
                            <input className="inputp"></input>
                            <label className="labelp">SURNAME:</label>
                            <input className="inputp"></input>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}