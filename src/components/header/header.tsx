import { Logo } from "../../assets/icons";

import styles from "./header.module.scss";

interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>
        <img alt="logo" src={Logo} className={styles.logo} />
        <p className={styles.title}>Xyecoc.tasks</p>
      </div>
      {children}
    </div>
  );
}
