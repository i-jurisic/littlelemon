import HomePage from "../../pages/HomePage.js";
import BookingPage from "../../pages/BookingPage.js";
import ConfirmedBookingPage from "../../pages/ConfirmedBookingPage.js";
import { Route, Routes } from "react-router-dom";

const Main = () => {
return(
    <>
    {/* ROUTES */}
<Routes> 
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/booking' element={<BookingPage />}></Route>
    <Route path='/confirmed' element={<ConfirmedBookingPage />}></Route>
</Routes>
    </>
);

};

export default Main;
