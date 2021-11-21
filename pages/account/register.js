import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/AuthForm.module.css";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match");
      return;
    }

    register({ username, email, password, passwordConfirm });
  };

  return (
    <Layout title="User Registration">
      <ToastContainer />
      <div className={styles.auth}>
        <h1>
          <FaUser /> Register
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label for="username">Username</label>
            <input
              placeholder="Username"
              type="text"
              value={username}
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label for="email">Email Address</label>
            <input
              placeholder="Email Address"
              type="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              placeholder="Password"
              type="password"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label for="passwordConfirm">Confirm Password</label>
            <input
              placeholder="Password"
              type="password"
              value={passwordConfirm}
              id="passwordConfirm"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <input className="btn" type="submit" value="Register" />
          <p>
            Already have an account? <Link href="/account/login">Login</Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}
