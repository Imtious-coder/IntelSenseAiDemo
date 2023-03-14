import React, { useState } from "react";
import styles from "./styles.module.scss";

const Alert = () => {
  const [open, setOpen] = useState(true);

  return (
    <React.Fragment>
      {open ? (
        <div className={styles.container}>
          <div className={styles.msg}>This website is under development</div>
          <div className={styles.close} onClick={() => setOpen(false)}>
            x
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Alert;
