import cn from "classnames";

import { Content } from "../content/content";
import styles from "./user-block.module.scss";
import { useState } from "react";

export function UserBlock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.user_block}>
      <img
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.avatar}
        alt="avatar"
        src="https://cdn.kanobu.ru/editor/images/54/9f4479ba-ac8c-42f9-bd9d-18f76eb8d946.jpg"
      />
      <div
        className={cn(styles.user_content, {
          [styles.user_content_open]: isOpen,
        })}
      >
        <Content />
      </div>
    </div>
  );
}
