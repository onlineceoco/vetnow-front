import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../components/Alert/Alert";
import { singinupLogin } from "../../redux/actions/auth.action";

const Login = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  const alertState = useSelector(state => state.alert);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(singinupLogin(phone));
  };

  useEffect(() => {
    if (authState.user && authState.user.phone) {
      router.push(`/login-confirm/${authState.user.phone}`);
    }
  }, [authState, router]);

  return (
    <div
      className="login-wrapper"
      style={{ backgroundImage: `url('/images/ss.jpg')` }}
    >
      <div className="center">
        <img src="/images/Layer1.png" alt="VetNow" />
        <h1>ورود / ثبت نام</h1>
        <form method="post" onSubmit={handleSubmit}>
          {alertState.kind && (
            <Alert
              error={alertState.kind && alertState.error}
              kind={alertState.kind && alertState.kind}
            />
          )}
          <div className="txt_field">
            <input type="text" onChange={e => setPhone(e.target.value)} />
            <label>شماره موبایل خود را وارد کنید</label>
          </div>

          <input type="submit" value="ورود به وتنا" />
          <div className="signup_link">
            <h4>
              با ورود و ثبت نام در پلتفرم , قوانین و حریم خصوصی آن را می‌پذیرید
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
