import { useState } from "react";
import { AuthForm, Content, Header, UserBlock } from "../../components";

import styles from './styles.module.scss';
import { Outlet } from "react-router-dom";

export default function DefaultPage() {
    const [isAuthed, setIsAuthed] = useState(false);

    return (
      <>
        <Header children={<UserBlock />} />
        <div className={styles.content}>
          <Content><Outlet /></Content>
        </div>
        {!isAuthed && <AuthForm />}
      </>
    );
}