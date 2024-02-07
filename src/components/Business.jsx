import { features } from "../constants";
import styles, { layout } from "../style";
// import Button from "./Button";
import Typewriter from "react-ts-typewriter";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2} >
      <Typewriter cursor={false} text='You do the business,'/>
      <br className="sm:block hidden" /> 
      <Typewriter text='we will handle the software.' />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our team ensures seamless software solutions from development to maintenance, prioritizing your business success.{/* Leave the technical complexities to us while you focus on your business goals. Our team is dedicated to managing and executing the software solutions you need. From development to maintenance, we ensure seamless integration, allowing you to prioritize what matters most – the success of your business */}
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
