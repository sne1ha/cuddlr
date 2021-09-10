import React from "react";
import './petviewstyle.css'
import PrimarySearchAppBar from "../components/Appbar/Appbar";

export default function PetViewCard(props) {

    return(
        
        <div className="wrapper">
            <div className="icon arrow"><i className="fas fa-arrow-left"></i></div>
            {/* <div className="icon dots"><i className="fa fa-ellipsis-v"></i></div> */}

            <div className="img-area">
                <div className="inner-area">
                    <img src="https://images.unsplash.com/photo-1609532350397-66fdeccc0dc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="" />
                </div>
            </div>
            
            <div className="photo-buttons">
                <a href="#" className="photo-button"><i></i></a>
                <a href="#" className="photo-button-1"><i></i></a>
            </div>
      
            <div className="name">Marly</div>
            <div className="about">💫  Featured Pet  💫</div> 
       
            <div className="social-icons">
                <a href="#" className="smile"><i className="fas fa-smile"></i></a>
                <a href="#" className="tissues"><i className="fas fa-box-tissue"></i></a>
                <a href="#" className="tree"><i className="fas fa-tree"></i></a>
            </div>
  
            <p className="about"> Marly is a super friendly 2 year old mixed terrior who loves everyone even kids and other animals like cats </p>
            <p className="Location"> Amherst, MA </p>
            <p className="hypoallergenic"> Hypoallergenic: Yes </p>
            <p className="Meds"> Medications: None </p>
            <p className="Toys"> Toys he likes: Tennis balls, and smelly socks! </p>
            <p className="Toys"> Average cost per month: $800 </p>

            <div className="buttons">
                <button>Adopt me!</button>
            </div>
  
            {/* <div className="social-share">
                <div className="row">
                    <i className="far fa-heart">
                        <i className="icon-2 fas fa-heart"></i>
                        <span>20.4k</span>
                    </i>
                </div>
            </div>
            <div className="row">
                <i className="far fa-comment">
                    <span>14.3k</span>
                </i>
            </div>

            <div className="row">
                <i className="fas fa-share">
                    <span>12.4k</span>
                </i>
            </div> */}

        </div>
    )
}
