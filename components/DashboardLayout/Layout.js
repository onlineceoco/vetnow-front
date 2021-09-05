import Image from "next/image";
import Link from "next/link";
import styles from "./Dashboard.module.css";
import { IoPerson } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth.action";

export default function Layout(props) {
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handelLogout = () => {
    dispatch(logout());
  };

  const showDashboardLinks = () => {
    if (authState.user && authState.user.role === "doctor") {
      return (
        <>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/me/dashboard">داشبورد</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="dashboard/join-chat">شروع چت</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/me/dashboard/profile">اطلاعات حساب</Link>
          </li>
          <hr className={styles.hr} />
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <a style={{ cursor: "pointer" }} onClick={handelLogout}>
              خروج
            </a>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/me/dashboard">داشبورد</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/me/dashboard/profile">اطلاعات حساب</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/s">کیف پول</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/s">سفارش های من</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/s">علاقه مندی ها</Link>
          </li>
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <Link href="/s">آدرس ها</Link>
          </li>
          <hr className={styles.hr} />
          <li className={styles.link}>
            <IoPerson size={30} className={styles.sidebarIcons} />
            <a style={{ cursor: "pointer" }} onClick={handelLogout}>
              خروج
            </a>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarImage}>
            <Image
              className={styles.sidebarImage}
              src="https://www.esafety.gov.au/sites/default/files/2019-07/protect_your_personal_information_0.jpg"
              alt=""
              layout="fixed"
              width="150"
              height="150"
            />
          </div>
          <ul className={styles.linkList}>{showDashboardLinks()}</ul>
        </div>
        <main className={styles.main}>{props.children}</main>
      </div>
    </>
  );
}
