import Project1Img from "../assets/images/portfolio-images/project1.jpg";
import Project2Img from "../assets/images/portfolio-images/project2.jpg";
import Project3Img from "../assets/images/portfolio-images/project3.jpg";

function PortfolioList(name, description, img, appLink, githubLink) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.appLink = appLink;
    this.githubLink = githubLink;
 };

const Project1 = new PortfolioList(
    "Covid-Testing_Locations",
    "An application for finding the nearest Covid19 testing locations updated in real time",
    Project1Img,
    "https://saraoros.github.io/covid-testing-locations/",
    "https://github.com/goodwinamundson/covid-testing-locations"
);
const Project2 = new PortfolioList(
  "Festival-Of-Nations",
  "A full stack application for employees to collaborate on an event hosted by their employer.",
  Project2Img,
  "https://powerful-mesa-61465.herokuapp.com/",
  "https://github.com/goodwinamundson/festivalOfNation"
);

const Project3 = new PortfolioList(
  "Dev-Drip",
  "A n e-commerce site dedicated to dev-related merch. This project was made using the MERN stack and deployed through REACT.",
  Project3Img,
  "https://calm-bayou-49842.herokuapp.com/",
  "https://github.com/goodwinamundson/dev-drip"
);





 let portfolioList = [Project1, Project2, Project3];

export default portfolioList;