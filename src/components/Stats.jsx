import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-col md:flex-row flex-wrap sm:mb-20 mb-6 md:gap-24`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-col justify-start md:justify-center items-center md:flex-row m-3 `} >
        <p className="flex justify-center items-center font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient  mt-1">
          {stat.title}
        </p>
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white ml-3">
          {stat.value}
        </h4>
      </div>
    ))}
  </section>
);

export default Stats;
