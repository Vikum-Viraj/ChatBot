import Header from "./components/Header"
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";


const App = () => {
  return(
    <>
    <Header/>
    <Container className='my-2'>
    <Outlet/>
    </Container>
    </>
  );
};

export default App;