import { FunctionComponent } from "react";

import RegisterHeader from "./RegisterHeader/RegisterHeader";
import RegisterForm from "./RegisterForm/RegisterForm";

import styles from "./Register.module.scss";

const Register: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.content}>
            <RegisterHeader />
            <RegisterForm />
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Register;
