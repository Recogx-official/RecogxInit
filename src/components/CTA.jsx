import styles from "../style";
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

const CTA = () => {
  const [hoverRef, isHovered] = useHover();
  
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph}  mt-5`}>
          "Stay ahead in the digital age – transform your project into a digital
          powerhouse."
        </p>
        <p className={`${styles.heading3} mt-5`}>
          Sudeep Ranjan sahoo <br className="sm:block hidden" />{" "}
        </p>
        <p className={`${styles.paragraph} mt-1 max-w-[312px]`}>
          Founder <br className="sm:block hidden" /> sudeep160403@gmail.com{" "}
          <br className="sm:block hidden" /> +91 9398481212
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      {/* <div className="btn-container"> */}
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
              {/* </div> */}
      </div>
    </section>
  );
};

export default CTA;
