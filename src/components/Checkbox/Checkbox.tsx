import { FunctionComponent } from "react";

import { CheckboxProps } from "./Checkbox.props";

import styles from "./Checkbox.module.scss";

const Checkbox: FunctionComponent<CheckboxProps> = ({
  id,
  name,
  checked,
  onChange,
  children,
  error = undefined,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <input
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          type="checkbox"
          className={styles.input}
        />
        <label htmlFor={name} className={styles.label}>
          {children}
        </label>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Checkbox;
