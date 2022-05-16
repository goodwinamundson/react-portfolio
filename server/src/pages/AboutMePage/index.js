import React from "react";
import "./styles.css";
//import Background from "../../components/Background";
import imageLink from "../../assets/images/background1.jpg"
import Navbar from "../../components/Mobile"
import MyName from "../../components/MyName"
import About from "../../components/About"
import Container from "../../components/Container"
import skillList from "../../utils/skillList"
import SkillsCard from "../../components/SkillsCard"
import PageTitle from "../../components/PageTitle"

function AboutMePage () {
    return(
        // <Background image = {imageLink}>
        <body>
            <Navbar />
            <MyName />
            <About />
            <PageTitle 
                title = "What I do"
                description = "Here are some of the skills that I have learned so far"
                paddingTop = {20}
                paddingBottom = {70}
            />

            <Container>
                {
                    skillList.map((item,id) =>{
                        return (
                            <SkillsCard 
                                icon = {item.icon}
                                color = {item.color}
                                title = {item.title}
                                description = {item.description}
                                key = {id}
                            />
                        )
                    })

                }       
            </Container>
            </body>
        // </Background>
    )
}

export default AboutMePage