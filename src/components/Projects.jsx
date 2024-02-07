import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Projects.css";
// import { Avatar } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
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
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
    
      <div style={{ width: "50%", textAlign: "center" }}>
      <h1 className={styles.heading2}>Our<span className="bg-opacity-20 text-[#28A9E2] bg-[#00f6ff] px-1 py-1 ml-4">Projects</span></h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img={blogs} />
          <Card img={exam} />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
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
      <img src={img} className="w-[100vw] h-[30vh] mt-5"/>
      </div>

      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "#28A9E2" }}>CHcommune</span> ,
        Open Source Engineer @supertokens
      </p>
    </div>
  );
};

export default Projects;