import Image from "next/image";
import Link from "next/link";
import styles from "./Dashboard.module.css";
import { IoPerson } from "react-icons/io5";

export default function Layout(props) {
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
          <ul className={styles.linkList}>
            {/* eslint-disable-next-line @next/next/link-passhref */}
            <li className={styles.link}>
              <IoPerson size={30} className={styles.sidebarIcons} />
              <Link href="dashboard/join-chat">شروع چت</Link>
            </li>
            <li className={styles.link}>
              <IoPerson size={30} className={styles.sidebarIcons} />
              <Link href="/s">اطلاعات حساب</Link>
            </li>
            <li className={styles.link}>
              <IoPerson size={30} className={styles.sidebarIcons} />
              <Link href="/s">اطلاعات حساب</Link>
            </li>
            <li className={styles.link}>
              <IoPerson size={30} className={styles.sidebarIcons} />
              <Link href="/s">اطلاعات حساب</Link>
            </li>
            <li className={styles.link}>
              <IoPerson size={30} className={styles.sidebarIcons} />
              <Link href="/s">اطلاعات حساب</Link>
            </li>
            <hr className={styles.hr} />
            <li className={styles.link}>
              <IoPerson size={30} className={styles.sidebarIcons} />
              <Link href="/s">خروج</Link>
            </li>
          </ul>
        </div>
        <main className={styles.main}>{props.children}</main>
      </div>
    </>
  );
}
