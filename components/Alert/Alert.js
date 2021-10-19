import React from "react";
import classes from "./Alert.module.css";
function Alert({ error, kind }) {
  const errors = error.split(".");
  return (
    <>
      {errors.map(error => {
        return (
          <div
            key={error}
            className={
              kind === "danger"
                ? [classes.danger, classes.alert].join(" ")
                : [classes.alert, classes.success].join(" ")
            }
          >
            <p>{error}</p>
          </div>
        );
      })}
    </>
  );
}

export default Alert;
