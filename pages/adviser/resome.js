  import { useState } from "react";
import setAuthToken from "../../helpers/axiosInstance";
import { api } from "../../helpers/UrlConfig";
import classes from "./resome.module.css";
import Link from "next/link";
import { Fragment } from "react";
import nookies from "nookies";
import Image from "next/image";

function Resome({ doctors, rooms }) {
  const [count, setCount] = useState(0);
  const doctorsLength = doctors.length;

  const handleNextDoctor = () => {
    if (count < doctorsLength - 1) {
      setCount(curval => curval + 1);
    } else {
      setCount(0);
    }
  };
  return (
    <div className={classes.container}>
      {doctors.map((doctor, index) => {
        const roomForEachDoctor = rooms.filter(
          (room, i) => room.user === doctor._id && index === i,
        );
        return (
          count === index && (
            <Fragment key={doctor._id}>
              <div className={classes.control}>
                <div className={classes.sidebarImage}>
                  <Image
                    className={classes.sidebarImage}
                    src="https://www.esafety.gov.au/sites/default/files/2019-07/protect_your_personal_information_0.jpg"
                    alt=""
                    layout="fixed"
                    width="150"
                    height="150"
                  />
                </div>
                <div className={classes.name}>
                  <span>{doctor.name ? doctor.name : doctor.phone}</span>
                </div>
                <div className={classes.btnGroup}>
                  <button className={classes.btn}>پرداخت ویزیت</button>
                  <button className={classes.btn}>
                    <Link
                      href={`/chatroom/${
                        roomForEachDoctor.length > 0 && roomForEachDoctor[0]._id
                      }?name=${
                        roomForEachDoctor.length > 0 &&
                        roomForEachDoctor[0].name
                      }`}
                    >
                      شروع ویزیت
                    </Link>
                  </button>
                  <button className={classes.btn} onClick={handleNextDoctor}>
                    دامپزشک بعدی
                  </button>
                </div>
              </div>
              <div className={classes.resome}>
                <div className={classes.white}>
                  <div className={classes.labesContainer}>
                    <label className={classes.label}>مشخصات</label>
                    <p>دوهدور یوسف محمدی</p>
                    <label className={classes.label}>مشخصات</label>
                    <p>دوهدور یوسف محمدی</p>
                    <label className={classes.label}>مشخصات</label>
                    <p>دوهدور یوسف محمدی</p>
                    <label className={classes.label}>مشخصات</label>
                    <p>دوهدور یوسف محمدی</p>
                    <label className={classes.label}>مشخصات</label>
                    <p>دوهدور یوسف محمدی</p>
                  </div>
                </div>
              </div>
            </Fragment>
          )
        );
      })}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const token = nookies.get(ctx);
  const setAuthTokenToHeader = setAuthToken(token.jwt);
  const res = await setAuthTokenToHeader.get(`${api}users/doctors`);
  const roomsRequest = await setAuthTokenToHeader.get(`${api}chat`);
  return { props: { doctors: res.data.data, rooms: roomsRequest.data.data } };
}

export default Resome;
