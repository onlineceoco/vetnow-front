import { BiLogOut, BiGridAlt } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";
import { RiLogoutCircleLine } from "react-icons/ri";
import Link from "next/link";
export const menuItems = [
  {
    name: "داروخانه",
    to: "/pharmacy",
    subMenus: [
      { name: "ویتامین ها و آنتی بیوتیک ها", to: "/Pharmacy/Antibiotics" },
      { name: "واکسن", to: "/Pharmacy/vaccine" },
      { name: "افزودنی ها", to: "/Pharmacy/Supplementry" },
      { name: "ضدعفونی کننده ها", to: "/Pharmacy/Disinfectants" },
    ],
  },
  {
    name: "فروشگاه",
    to: "/store",
    subMenus: [
      { name: "کنسانتره و مکمل ها", to: "/Store/Concentrate" },
      { name: "دان آماده (پلت)", to: "/Store/Pellets" },
      { name: "تجهیزات پرورشی", to: "/Store/Equipments" },
      { name: "پرندگان زینتی", to: "/Store/Birds" },
    ],
  },
  {
    name: "جوجه گوشتی",
    to: "/chick",
    subMenus: [
      { name: "راس ۳۰۸", to: "/Chick/Ross308" },
      { name: "آبراکرز پلاس", to: "/Chick/Arbruckers" },
      { name: "آرین", to: "/Chick/Arian" },
      { name: "کاپ", to: "/Chick/Cobb500" },
      { name: "هوبارد", to: "/Chick/Hubbards" },
    ],
  },
  {
    name: "مشاوره",
    to: "/adviser/resome",
    subMenus: [
      { name: "دامپزشک آنلاین", to: "/adviser/resome" },
      { name: "مشاوره پرورشی", to: "/Adviser/breeding-advice" },
      { name: "مشاور تغذیه ای", to: "/Adviser/Nutritional-advice" },
      { name: "طرح توجیهی و کار آفرینی", to: "/Adviser/Plans" },
    ],
  },
  {
    name: "اتوماسیون",
    to: "/automasion",
    subMenus: [
      { name: "راه اندازی اتوماسیون اختصاصی", to: "/Automation/Setup" },
      { name: "سخت افزار و تجهیزات اتوماسیون", to: "/Automation/Hardware" },
      { name: "مشاوره و آموزش", to: "/Automation/Advice-training" },
      { name: "پشتیبانی اتوماسسیون", to: "/Automation/Support" },
    ],
  },
  {
    name: "اخبار و آموزش",
    to: "/news",
    subMenus: [
      { name: "اخبار صنعت طیور", to: "/News/Poultry" },
      { name: "منابع آموزشی", to: "/News/Source" },
      { name: "راه کارهای پرورشی", to: "/News/Poultry-solution" },
    ],
  },
];

function Drawer() {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  let menRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", event => {
      if (menRef.current) {
        if (!menRef.current.contains(event.target)) {
          setClose(true);
        }
      }
    });
  });
  let profileRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", event => {
      if (profileRef.current) {
        if (!profileRef.current.contains(event.target)) {
          setOpen(false);
        }
      }
    });
  });

  return (
    <>
      <div ref={menRef} className={`sidebar ${close ? "close" : ""}`}>
        <div className="logo-details">
          <Link href="/">
            {<span className="logo-name">ویرا تجارت نوین اسپوتا</span>}
          </Link>
          <div className="dashboard-logo" onClick={() => setClose(!close)}>
            <BiGridAlt style={{ fontSize: "25px" }} />
          </div>
        </div>
        <ul className="nav-links">
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
            />
          ))}
        </ul>

        <div
          ref={profileRef}
          className={`profile-details ${open ? "open" : ""}`}
        >
          <div className="profile-content">
            <img
              onClick={() => setOpen(!open)}
              src={"./favicon.ico"}
              alt="Profile"
            />
          </div>

          <div className="name-job">
            <div className="profile-name"> User Account </div>
            <div className="job">Custome words</div>
          </div>
          <div className="profile-logo">
            <RiLogoutCircleLine />
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
