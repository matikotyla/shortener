import { FunctionComponent } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";

import { InputProps } from "./Input.props";

import styles from "./Input.module.scss";

const Input: FunctionComponent<InputProps> = ({
  id,
  name,
  value,
  label = "",
  type = "text",
  autoComplete = undefined,
  required = false,
  placeholder = "",
  hint = undefined,
  error = undefined,
  valid = true,
  onChange,
}) => {
  return (
    <div className={styles.root} data-testid="input">
      <label data-testid="input-label" htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.container}>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
          data-testid="input-field"
          className={clsx(
            styles.field,
            valid ? styles.fieldValid : styles.fieldInvalid
          )}
          onChange={onChange}
        />
        {!valid && (
          <div className={styles.box}>
            <ExclamationCircleIcon
              data-testid="input-icon"
              className={styles.icon}
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && (
        <p data-testid="input-error" className={styles.error}>
          {error}
        </p>
      )}
      {hint && !error && <p className={styles.hint}>{hint}</p>}
    </div>
  );
};

export default Input;
