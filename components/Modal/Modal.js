import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import setAuthToken from "../../helpers/axiosInstance";
import Alert from "../Alert/Alert";
import classes from "./Modal.module.css";
function Modal({ handleCloseModal, title, inputs, info }) {
  const [data, setData] = useState(info ? info : null);
  const [error, setError] = useState(null);
  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const axios = setAuthToken(token);
    try {
      const res = await axios.patch("users", data);

      handleCloseModal();
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  return (
    <div className={classes.modalContainer}>
      <div className={classes.formContainer}>
        <div className={classes.formHeader}>
          <div className={classes.title}>{title}</div>
          <div onClick={handleCloseModal} className={classes.closeBtn}>
            X
          </div>
        </div>
        <hr className={classes.hr} />
        <form className={classes.form} onSubmit={handleSubmit}>
          {inputs.map(input => {
            return (
              <Fragment key={input.name}>
                {error && <Alert error={error} kind="danger" />}
                <label className={classes.formLabel} htmlFor={input.name}>
                  {input.label}
                </label>
                <input
                  className={classes.input}
                  type="text"
                  name={input.name}
                  id={input.name}
                  value={data[input.name]}
                  //   placeholder={input.info && input.info.map(inf => inf)}
                  onChange={e => {
                    const {
                      target: { name, value },
                    } = e;
                    setData(curval => {
                      return {
                        ...curval,
                        [name]: value,
                      };
                    });
                  }}
                />
              </Fragment>
            );
          })}
          <div className={classes.btnContainer}>
            <button type="submit">ثبت اطلاعات</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
