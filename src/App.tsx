import { AuthForm, Content, Header, UserBlock } from "./components";

import styles from "./app.module.scss";
import { useState } from "react";

function App() {
  const [isAuthed, setIsAuthed] = useState(false);

  return (
    <>
      <Header children={<UserBlock />} />
      <div className={styles.content}>
        <Content />
      </div>
      {!isAuthed && <AuthForm />}
    </>
  );
}

export default App;
