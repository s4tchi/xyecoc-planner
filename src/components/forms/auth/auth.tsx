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

        <img alt="google" src={Google} className={styles.google} />
      </Content>
    </div>
  );
}
