import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
      <Player
  autoplay
  loop
  src="https://lottie.host/c6156027-d723-4258-8b47-15359d7abfa3/89ahsy8T51.json"
  className="w-[80%] h-[80%] relative mr-32"
>
  {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
</Player>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Excellence in Delivery  <br className="sm:block hidden" /> Right on Schedule!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Experience the assurance of timely deliveries with our commitment to punctuality. We prioritize on-time dispatch and delivery to ensure your products reach you before you expect them
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing;
