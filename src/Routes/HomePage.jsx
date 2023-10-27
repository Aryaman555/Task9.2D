import React from 'react';
import "../CSS/HomePage.css"
import Header from "../Components/Header"
import CardList from "../Components/CardList"
import Newsletter from "../Components/Newsletter"
import Bottom from "../Components/Bottom"

function Homepage() {
    return (
    <div className="HomePage">
      <Header/>
      <img src='https://storage-prtl-co.imgix.net/endor/organisations/11000/images/1533828576_3262_150116_BC_Building_Burwod_01.jpg' alt='Deakin' style={{width: '100%'}}/>
      <CardList/>
      <Newsletter/>
      <Bottom/>
    </div>
    )
}
export default Homepage