import React from 'react';
import "./App.css";
import Image from "./images/image.png";

function App() {
    return (
        <div className="main">
            <div className="bitron_main">
                <div className="smart">
                <div className="smrt">
                 <p>SMART</p></div>
                    <div className="vrtl"></div>
                
                <div className="bi"> <h1>BI</h1></div>
                <div className="tron"> <h1>TRON</h1></div>
                <div className="vrtl2">
                </div>
                    <div className="contrct">
                        <p>CONTRACT</p>
                    </div>
                    
                </div>
                <div className="decentrlized">
                    <h1 className="best">BEST DECENTRALIZED</h1>
                    <h1 className="community">COMMUNITY SUPPORT FUND ON TRON BLOCKCHAIN</h1>
                    <h2 className="verified">100% VERIFIED SMART CONTRACT</h2>
                    <h3 className="daily">18.28% Daily ROI128% IN 7 DAYS</h3>
                </div>
                <div className="button_div">
                    <button className="tele">TELEGRAM</button>
                    <button className="smart_contract">SMART CONTRACT</button>
                </div>
            </div>
            <div className="image">
                <img src={Image} />
            </div>
        </div>
    )
}

export default App;
