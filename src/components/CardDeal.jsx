import { card } from "../assets";
import styles, { layout } from "../style";
import Btn from "./Button1.jsx";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import styled, { ThemeProvider } from "styled-components";
import useHover from "../utils/useHover";
import { lightTheme } from "../theme/theme";
import FramerMagnetic from "../utils/framermagnetic.jsx";
const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
`;





const CardDeal = () => {
  const [hoverRef, isHovered] = useHover();
  return (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Unbeatable Value with  <br className="sm:block hidden" /> Budget-Friendly Pricing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Unlock cost-effective solutions with our budget friendly pricing, delivering exceptional value without compromising on quality
      </p>
      <ThemeProvider theme={lightTheme}>
                  <Page>
                    <FramerMagnetic>
                      <Btn
                        ref={hoverRef}
                        href="https://www.chcommune.com/" 
                        type="flat"
                        style={{ borderRadius: '10px', backgroundColor: 'blue', color: 'white' }}
                        onClick={() => console.log("clicked")}
                      >
                        Contact us
                      </Btn>
                    </FramerMagnetic>
                  </Page>
                </ThemeProvider>
      
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
  }
export default CardDeal;
