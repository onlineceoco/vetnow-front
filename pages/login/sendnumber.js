const SendNumber = () => {
  return (
    <div
      className="login-wrapper"
      style={{ backgroundImage: `url('../images/ss.jpg')` }}
    >
      <div className="center">
        <img src="../images/Layer1.png" alt="VetNow" />
        <h1>ورود / ثبت نام</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>شماره موبایل خود را وارد کنید</label>
          </div>

          <input type="submit" value="ورود به وتنا" />
          <div className="signup_link">
            <h4>
              با ورود و ثبت نام در پلتفرم , قوانین و حریم خصوصی آن را می‌پذیرید{" "}
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendNumber;
