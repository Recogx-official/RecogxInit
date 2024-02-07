import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Unbeatable Value with  <br className="sm:block hidden" /> Budget-Friendly Pricing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Unlock cost-effective solutions with our budget friendly pricing, delivering exceptional value without compromising on quality
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      {/* <img src={card} alt="billing" className="w-[100%] h-[100%]" /> */}
      <Player
  autoplay
  loop
  src="https://lottie.host/0f175b58-03a1-4371-900b-ca772f68366c/KUVnV8kzof.json"
  className="w-[80%] h-[80%] relative mr-32"
>
  {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
</Player>
    </div>
  </section>
);

export default CardDeal;
