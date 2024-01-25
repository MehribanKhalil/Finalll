import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Admin from './pages/Admin';
import Wishlist from "./pages/Wishlist";
import Detail from "./pages/Detail";
import ScrollToTop from "./components/Common/ScrollToTop";
import Basket from "./pages/Basket";

const helmetContext = {};

function App() {
	return (
		<HelmetProvider context={helmetContext}>

			<BrowserRouter>
			<ScrollToTop/>
				<Routes>
					<Route element={<MainLayout/>}>
					<Route path="/" element={<Home/>} />
					<Route path="/admin" element={<Admin/>} />
					<Route path="/wishlist" element={<Wishlist/>} />
					<Route path="/basket" element={<Basket/>} />
					<Route path="/course/:id" element={<Detail/>} />

					</Route>
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}

export default App;
