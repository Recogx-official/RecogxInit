import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Projects.css";
// import { Avatar } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Description } from "@mui/icons-material";
import styles from "../style";
import {blogs,exam} from "../assets"

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Projects = () => {
  return (
    <div id="projects"
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
    
      <div style={{ width: "50%", textAlign: "center" }}>
      <h1 className={styles.heading2}>Our<span className="bg-opacity-20 text-[#00f7ff] bg-[#a3fbfe] px-1 py-1 ml-4">Projects</span></h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img={blogs}  Lin="https://www.chcommune.com/" Title="CHcommune" Description="A MERN stack fashion blog web application for sharing trends, styling tips, and outfit inspirations."/>
          <Card img={exam}  Lin="https://www.chcommune.com/" Title="Exam Booster" Description="A Flutter-based mobile app offering JEE and NEET aspirants a platform for exam preparation through mock tests and practice exams." />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img,Title,Description,Lin }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      {/* <Avatar
        // imgProps={{ style: { borderRadius: "98%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 32,
          marginTop:32,
        }}
      /> */}
      <div>
      <img src={img} className="w-[100vw] h-[30vh] mt-5 object-scale-down  overflow-hidden"/>
      </div>
     
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <a href={Lin}><span style={{ fontWeight: 500, color: "#00f7ff" }}>{Title}</span> </a>,
        {Description}
      </p>
    </div>
  );
};

export default Projects;