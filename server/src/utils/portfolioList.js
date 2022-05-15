import Project1Img from "../assets/images/portfolio-images/project1.jpg";
import Project2Img from "../assets/images/portfolio-images/project2.jpg";


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





 let portfolioList = [Project1, Project2];

export default portfolioList;