import { Route, Routes } from "react-router";
import styles from "./App.scss"
import React, {useState} from 'react'
import Home from "./pages/Home";
import Tariffs from "./pages/Tariffs/Tariffs";
import About from "./pages/About/About";
import Payment from "./pages/Payment/Payment";
import Cinema from "./pages/Cinema/Cinema";
import Promotions from "./pages/Promotions";
import Gift from "./pages/Gift";
import Discounts from "./pages/Discounts";
import Season from "./pages/Season";
import Tvbox from "./pages/Tvbox/Tvbox";
import Bid from "./components/BidForm/Bid";
import Balance from './components/balanceCheck';
import { PaymentSuccess, PaymentFail } from './pages/PaymentResult';

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <Routes>
          <Route path='/' element={<Home modalActive={modalActive} setModalActive={setModalActive} />} />
          <Route path='/tariffs' element={<Tariffs modalActive={modalActive} setModalActive={setModalActive}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/payment' element={<Payment modalActive={modalActive} setModalActive={setModalActive}/>} />
          <Route path='/cinema' element={<Cinema modalActive={modalActive} setModalActive={setModalActive}/>} />
          <Route path='/promotions' element={<Promotions/>} />
          <Route path='/gift' element={<Gift/>}/>
          <Route path='/discounts' element={<Discounts />} />
          <Route path='/season' element={<Season modalActive={modalActive} setModalActive={setModalActive}/> } />
          <Route path='/tvbox' element={<Tvbox modalActive={modalActive} setModalActive={setModalActive}/>} />
          <Route path='/check' element={<Balance/>} />
          <Route path='/payment/success' element={<PaymentSuccess />} />
          <Route path='/payment/fail' element={<PaymentFail />} />
      </Routes>
      <Bid active={modalActive} setActive={setModalActive} />
    </>
  );
}

export default App;
