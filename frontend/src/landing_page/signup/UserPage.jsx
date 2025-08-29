// function UserPage() {
//     return ( 
//         <>
//         <h1>user</h1>
//         </>
//      );
// }

// export default UserPage;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "https://zerodha-backends.onrender.com/",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <>
      <div className="home_page">
        <h2>
          {" "}
          Welcome <span>{username}</span>
        </h2>
        <button 
        onClick={() => window.location.href = "http://localhost:5174/"}
      >
        Go to Dashboard
      </button>
      <a className="btn btn-outline-primary" onClick={Logout}>logout</a>
      </div>
      <ToastContainer />
    </>
  );
};

export default HomePage;
