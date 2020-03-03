import React from 'react'
import "./Main.css";
function CardSection() {
    return (
        <div className="card-section">
            <div className="align">

           
                <div className="row">
                    <div className="col s6 m3 margin-card card tallin">
                    <div className="cardText">
                            Tallinn
                        </div>
                    </div>
                    <div className="col s6 m3 card margin-card helsinki">
                    <div className="cardText">
                            Helsinki
                        </div>
                    </div>
                    <div className="col s6  m3 card margin-card stockholm">
                        <div className="cardText">
                            Stockholm
                        </div>
                    </div>
                    </div>
            </div>
 
        </div>
    )
}

export default CardSection
