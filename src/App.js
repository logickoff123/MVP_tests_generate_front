import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import styles from "./App.module.css"


function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
