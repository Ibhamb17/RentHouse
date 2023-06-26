import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import PropertyRoute from "./routes/PropertyRoute.js";
import CustomerRoute from "./routes/CustomerRoute.js";
import KontrakanRoute from "./routes/kontrakanRoutes.js";
import BookingRoute from "./routes/BookingRoute.js";
import PembayaranRoute from "./routes/PembayaranRoute.js";
import gambarkontrakanRoute from "./routes/gambarkontrakanRoute.js";
import Owner from "./models/Owner.js";
import Kontrakan from "./models/Kontrakan.js";
// import Fasilitas from "./models/Fasilitas.js";
// import HargaKontrakan from "./models/HargaKontrakan.js";
// import Booking from "./models/Booking.js";
// import Pembayaran from "./models/Pembayaran.js";
// import Bank from "./models/Bank.js";
// import GambarKontrakan from "./models/Gambarkontrakan.js";
// import Review from "./models/Review.js";
// import Like from "./models/Like.js";
dotenv.config();

const app = express();

    const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

(async()=>{
    await db.sync();
})();

app.use(session({
    secret: "process.env.SESS_SECRET",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);
app.use(CustomerRoute);
app.use(KontrakanRoute);
app.use(BookingRoute);
app.use(PembayaranRoute);
app.use(PropertyRoute);
app.use(gambarkontrakanRoute);
store.sync();

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running on port '+process.env.APP_PORT);
});
