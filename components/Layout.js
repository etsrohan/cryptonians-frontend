import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import Meta from "./Meta";

// Overall layout of the website
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
