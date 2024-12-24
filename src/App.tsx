import { Content, Header, UserBlock } from "./components";

import styles from "./app.module.scss";

function App() {
  return (
    <>
      <Header children={<UserBlock />} />
      <div className={styles.content}>
        <Content />
      </div>
    </>
  );
}

export default App;
