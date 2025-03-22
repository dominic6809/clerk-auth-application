import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, SignInButton } from "@clerk/clerk-react";
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      // Redirect to the dashboard if the user is already signed in
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to TaskMaster</h1>
        <p className={styles.subtitle}>
          Your personal dashboard for managing tasks, tracking progress, and achieving goals. 
          Sign in to get started on your productivity journey.
        </p>
        <SignInButton mode="modal">
          <button className={styles.signInButton}>
            Sign In to Your Account
          </button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Home;