import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../components/Alert/Alert";
import Timer from "../../components/Timer/Timer";
import { loginConfirm } from "../../redux/actions/auth.action";

const Login = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  const alertState = useSelector(state => state.alert);
  useEffect(() => {
    if (!authState.user) {
      router.push(`/login`);
    }
  }, [authState]);

  //timer for countdown
  const phone = router.query.phone;
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  //redirect if authenticated

  if (authState.isAuthenticated) {
    router.push("/");
  }

  const submitHandler = e => {
    e.preventDefault();
    dispatch(loginConfirm(password, phone));
  };

  return (
    <>
      <Head>
        <title>Vetnow-Signin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="login-wrapper"
        style={{ backgroundImage: `url('/images/ss.jpg')` }}
      >
        <div className="center">
          <Image
            width="300"
            height="300"
            src="/images/Layer1.png"
            alt="VetNow"
          />
          <h1>ورود / ثبت نام</h1>
          <form onSubmit={submitHandler}>
            {alertState.kind && (
              <Alert
                error={alertState.kind && alertState.error}
                kind={alertState.kind && alertState.kind}
              />
            )}
            <div className="txt_field">
              <input onChange={e => setPassword(e.target.value)} type="text" />
              <span></span>
              <label>رمز عبور خود را وارد نمایید</label>
            </div>
            <Timer expiryTimestamp={time} phone={phone} />

            <input type="submit" value="ورود به وتنا" />

            <div className="signup_link">
              <h4>
                با ورود و ثبت نام در پلتفرم , قوانین و حریم خصوصی آن را
                می‌پذیرید
              </h4>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
