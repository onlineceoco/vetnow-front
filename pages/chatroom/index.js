import Layout from "../../components/Adviser/Layout";
import styles from "../../components/Chatroom/ChatroomStyle.module.css";
import Link from "next/link";
import { useState } from "react";
import Payment from "../../components/Chatroom/payment";
const Chatroom = () => {
  const [center,setCenter]=useState(true);
  const [payment,setPayment]=useState(false);
  return (
    <Layout>
      <div className={styles["container"]}>
        {center && (<div className={styles["center"]}>
          <h1>نام دامپزشک</h1>
          <h2>دکتر یوسف محمدی</h2>
          <h1>تخصص</h1>
          <h2>کلینیسن طیور</h2>
          <h1>مدرک</h1>
          <h2>دکترای دامپزشکی فارغ التحصیل 1379</h2>
          <h2>۲۲ سال سابقه کار</h2>
          <h1> کد نظام پزشکی من</h1>
          <h2>204013</h2>
          <h1>سایر اطلاعات</h1>
          <h2>عضو کنگره بین المللی طیور</h2>
        </div>)}
        {payment && (<div className={`${styles["center"]} ${styles['payment']}`}>
        <img src="/images/drImg/doctor.png" alt="" />
        <div className={styles["detail"]}>
          <div className={styles["detail-one"]}>
            <h1 id={styles["title"]}>حق ویزیت</h1>
            <h1 id={styles["sub"]}>3000000 تومان</h1>
          </div>
          <div className={styles["detail-two"]}>
            <h1 id={styles["title"]}>مدت زمان چت </h1>
            <h1 id={styles["sub"]}>30 دقیقه</h1>
          </div>
        </div>
        <button>پرداخت</button>
        </div>)}
        <div className={styles["right"]}>
          <img src="/images/drImg/mohammadi.jpg" />
            <h1 onClick={()=>(setCenter(false), setPayment(true))}>پرداخت ویزیت</h1>
          <Link href="/chatroom/visitStart">
            <h1>شروع ویزیت</h1>
          </Link>
          <h1>دامپزشک بعدی</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Chatroom;
