import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
