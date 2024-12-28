import { Google } from "../../../assets/icons";
import { Content } from "../../content/content";

import styles from "./auth.module.scss";

export function AuthForm() {
  return (
    <div className={styles.auth}>
      <Content className={styles.auth_content}>
        <p className={styles.title}>
          Wellcome to <span className={styles.title_span}>Xyecoc</span>
        </p>
        <div className={styles.auth_vars}>
          <a href={import.meta.env.VITE_GOOGLE_AUTH_URL}>
            <img alt="google" src={Google} className={styles.google} />
          </a>
        </div>
      </Content>
    </div>
  );
}
