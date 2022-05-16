import React from "react";
import "./styles.css";
//import Background from "../../components/Background";
import imageLink from "../../assets/images/background1.jpg"
import Navbar from "../../components/Mobile"
import PageTitle from "../../components/PageTitle"
import ContactCard from "../../components/ContactCard"

function ContactMePage () {
    return(
        <body>
            <Navbar />
            <PageTitle 
                paddingTop = {140}
                paddingBottom = {0}
                title = "Contact Me"
            />
            <ContactCard />

        </body>
    )
}

export default ContactMePage