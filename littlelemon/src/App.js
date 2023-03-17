import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import ReservationsPage from "./ReservationsPage";
import OrderOnlinePage from "./OrderOnlinePage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/orderonline" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
