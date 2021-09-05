import { useState } from "react";
import WithAuth from "../../components/HOC/withAuth";
import setAuthToken from "../../helpers/axiosInstance";
import { api } from "../../helpers/UrlConfig";
import classes from "./resome.module.css";
import Link from "next/link";
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
            <>
              <div className={classes.control}>
                <div className={classes.pic}>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="s"
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
            </>
          )
        );
      })}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const [tokenStr] = ctx.req.headers.cookie.split(" ").filter(str => {
    return str.includes("jwt");
  });
  const token = tokenStr.split("=")[1];
  const setAuthTokenToHeader = setAuthToken(token);
  const res = await setAuthTokenToHeader.get(`${api}users/doctors`);
  const roomsRequest = await setAuthTokenToHeader.get(`${api}chat`);
  return { props: { doctors: res.data.data, rooms: roomsRequest.data.data } };
}

export default WithAuth(Resome);
