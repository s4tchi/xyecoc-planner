import { Content, Header } from "./components";

import styles from './app.module.scss';

function App() {

  return (
    <>
      <Header children={'test'} />
      <div className={styles.content}>
        <Content />
      </div>
    </>
  );
}

export default App;
