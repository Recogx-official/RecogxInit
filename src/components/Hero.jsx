import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Button from "./Button";
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
const Hero = () => {
  const [hoverRef, isHovered] = useHover();
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          
            <span className="text-gradient">Recogx_init</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          <ThemeProvider theme={lightTheme}>
                  <Page>
                    <FramerMagnetic>
                      <Button
                        ref={hoverRef}
                        onClick={() => console.log("clicked")}
                      >
                        Contact us
                      </Button>
                    </FramerMagnetic>
                  </Page>
                </ThemeProvider>
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[56px] text-[40px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          The Next Gen <br className="sm:block hidden" />{" "}Software Solutions.
        </h1>
        
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        As passionate student developers, we actively create innovative solutions, spanning from mobile apps to web applications. With a blend of coding expertise and collaboration, we transform creative ideas into practical solutions."{/* Our team of enthusiastic student developers is deeply engaged in crafting innovative solutions for various projects, ranging from mobile apps to web applications. We leverage our coding skills and collaborative efforts to bring creative and practical ideas to life. */}
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      <ThemeProvider theme={lightTheme}>
                  <Page>
                    <FramerMagnetic>
                      <Button
                        ref={hoverRef}
                        onClick={() => console.log("clicked")}
                      >
                        Get Started
                      </Button>
                    </FramerMagnetic>
                  </Page>
                </ThemeProvider>
                <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
