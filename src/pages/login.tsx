import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate }  from "react-router-dom";
import { AppDispatch } from "../store";
import Logo from '../security-ramand.svg';
import { 
  changePasswordAction, 
  changeUsernameAction, 
  setIsLoginUserAction
} from "../features/user/user-slice";
import "./login.css"

const LoginPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername =(username: string) =>{
    setUsername(username);
    dispatch(changeUsernameAction(username));
  }

  const changePassword =(password: string) =>{
    setPassword(password);
    dispatch(changePasswordAction(password));
  }

  const login = () => {
    debugger;
    dispatch(setIsLoginUserAction(true));
    navigate('/list');
  }

  return (
    <div className="landing">
      <div className="logo-container">
        <img className="logo" alt="logo" src={Logo} />
        <p className="logo-caption">به رامند خوش آمدید</p>
        <div className="input-box">
          <span> نام کاربری: </span>
          <input
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => changeUsername(e.target.value)}
          />
        </div>
        <div className="input-box">
          <span> کلمه عبور: </span>
          <input
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => changePassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={login} className="btn-login">
          ورود به سیستم
        </button>
      </div>
    </div>
  )
};

export default LoginPage;