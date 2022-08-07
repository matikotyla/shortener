import { ComputerImage } from "assets/images";
import styles from "./HomeHero.module.scss";

const HomeHero = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.title}>
            <span>Short links,</span>
            <span>big results</span>
          </div>
          <div className={styles.text}>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua ad ad non deserunt sunt.
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Shorten your link right now</p>
            <form className={styles.form}>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:flex-1 border-gray-300"
                placeholder="Enter your link"
              />
              <button
                type="submit"
                className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
              >
                Shorten
              </button>
            </form>
            <p className={styles.info}>
              We care about the protection of your data. Read our{" "}
              <a href="#" className={styles.link}>
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.image}>
            <ComputerImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
