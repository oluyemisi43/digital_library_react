import React from 'react';
import api from "../../assets/img/api.png"
import book1 from "../../assets/img/book1.jpeg"
import book2 from "../../assets/img/book2.jpeg"
import logo from "../../assets/img/logo.jpeg"
import db from "../../assets/img/db.png"
export const Home = (props:any) => {
    return (
        <div>
            <h1>Welcome to the {props.title}!</h1>

            <br></br>
            <section className="row">
                <div className="col-2 col-md-2">
                    <img className="header-image" src={book1} alt="Car Header Image"></img>
                </div>

                <div className="col-2 col-md-2">
                    <img className="header-image" src={book2} alt="Car Header Image"></img>
                </div>
            </section>

            <br></br>
            <br></br>
            
            <section className="row">
            <div className="col-12" id="middle-text">
                <h2>Display Your Collection!</h2>
            </div>
            </section>
        
            <br></br>
            <section className="row" id="features-section">
            <div className="col-12 col-md-6">
                <img src={api} alt="API Image" id="api-image"></img>
                <h4>Dedicated API Routes</h4>
                <p>Use the create, update, and delete buttons to edit your collection in the dashboard.</p>
            </div>

            <div className="col-12 col-md-6">
                <img src={db} alt="database-image" id="database-image"></img>
                <h4>Backed By a PostgreSQL Database</h4>
                <p>All data will be persisted inside of a secure Postgres Database.</p>
            </div>
            </section>

            <br></br>    
        </div>
       


    )
}