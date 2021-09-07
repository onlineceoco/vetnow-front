import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Layout from "../../../components/DashboardLayout/Layout";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import classes from "./profile.module.css";
import { IoBrushOutline } from "react-icons/io5";
import Modal from "../../../components/Modal/Modal";
import nookies from "nookies";
import setAuthToken from "../../../helpers/axiosInstance";

function Profile({ user }) {
  const authState = useSelector(state => state.auth);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalInputs, setModalInputs] = useState(null);
  const [modalInfo, setModalInfo] = useState(null);

  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenModal = (title, inputs, info) => {
    setOpenModal(true);
    setModalTitle(title);
    setModalInputs(inputs);
    if (info) {
      setModalInfo(info);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    refreshData();
  }, [openModal]);

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar user={user} toggle={toggle} />
      <Layout user={user}>
        <div className={classes.card}>
          <div className={classes.header}>
            <span className={classes.headerText}>اطلاعات شخصی</span>
          </div>
          <div className={classes.container}>
            <div className={classes.rightBox}>
              <div className={classes.row}>
                <div className={classes.info}>
                  <div className={classes.label}>نام و نام خانوادگی</div>
                  <div
                    className={classes.editBtn}
                    onClick={handleOpenModal.bind(
                      null,
                      "نام و نام خانوادگی",
                      [
                        { label: "نام", name: "name" },
                        {
                          label: "نام خانوادگی",
                          name: "lastName",
                        },
                      ],
                      { name: user.name, lastName: user.lastName },
                    )}
                  >
                    <IoBrushOutline />
                  </div>
                </div>
                <div className={classes.value}>
                  {user.name && user.lastName
                    ? `${user.name} ${user.lastName}`
                    : "-"}
                </div>
              </div>
              <div className={classes.row}>
                <div className={classes.info}>
                  <div className={classes.label}>پست الکترونیک</div>
                  <div
                    className={classes.editBtn}
                    onClick={handleOpenModal.bind(
                      null,
                      "پست الکترونیک",
                      [
                        {
                          label: "پست الکترونیک",
                          name: "email",
                        },
                      ],
                      { email: user.email },
                    )}
                  >
                    <IoBrushOutline />
                  </div>
                </div>
                <div className={classes.value}>
                  {user.email ? user.email : "-"}
                </div>
              </div>
            </div>

            <div className={classes.leftBox}>
              <div className={classes.row}>
                <div className={classes.info}>
                  <div className={classes.label}>کد ملی</div>
                  <div
                    className={classes.editBtn}
                    onClick={handleOpenModal.bind(
                      null,
                      "کد ملی",
                      [
                        {
                          label: "کد ملی",
                          name: "codeMelli",
                        },
                      ],
                      { codeMelli: user.codeMelli },
                    )}
                  >
                    <IoBrushOutline />
                  </div>
                </div>
                <div className={classes.value}>
                  {user.codeMelli ? user.codeMelli : "-"}
                </div>
              </div>
              <div className={classes.row}>
                <div className={classes.info}>
                  <div className={classes.label}>شغل</div>
                  <div
                    className={classes.editBtn}
                    onClick={handleOpenModal.bind(
                      null,
                      "شغل",
                      [{ label: "شغل", name: "job" }],
                      { job: user.job },
                    )}
                  >
                    <IoBrushOutline />
                  </div>
                </div>
                <div className={classes.value}>{user.job ? user.job : "-"}</div>
              </div>
            </div>
          </div>
          {/* modal */}
          {openModal && (
            <Modal
              handleCloseModal={handleCloseModal}
              title={modalTitle}
              inputs={modalInputs}
              info={modalInfo}
            />
          )}
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { jwt } = nookies.get(context);
  const axios = setAuthToken(jwt);
  try {
    const user = await axios.get("users");
    if (user) {
      return {
        props: { user: user.data.user },
      };
    }
  } catch (e) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}

export default Profile;
