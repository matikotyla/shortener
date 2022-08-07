import { FunctionComponent } from "react";

import HomeHero from "./HomeHero/HomeHero";
import HomeLogo from "./HomeLogo/HomeLogo";
import HomeFeature from "./HomeFeature/HomeFeature";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeQuestion from "./HomeQuestion/HomeQuestion";
import HomeTrial from "./HomeTrial/HomeTrial";

import styles from "./Home.module.scss";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <HomeHero />
      <HomeLogo />
      <HomeFeature />
      <HomeAbout />
      <HomeQuestion />
      <HomeTrial />
    </div>
  );
};

export default Home;
