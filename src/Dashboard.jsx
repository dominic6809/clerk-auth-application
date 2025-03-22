import { UserButton } from '@clerk/clerk-react';
import { useClerk } from '@clerk/clerk-react';
import styles from './dashboard.module.css';

const Dashboard = () => {
  const { user } = useClerk();

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.header}>
        <h1 className={styles.welcomeText}>
          Welcome to your dashboard, {user.firstName}
        </h1>
        <div className={styles.userButtonWrapper}>
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;