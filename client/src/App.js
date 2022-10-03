import "./index.css";
import "./form.css";
import "./gallery.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./fontello/css/fontello.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";

//Pages

import Home from "./pages/Home";
import Join from "./pages/Join";
import Gallery from "./pages/Gallery";
import FormSubmitted from "./pages/FormSubmitted";
import Admin from "./pages/Admin";

//COMPONENTS

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

document.title = "Konkurs Wiedzy Technicznej";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/gallery' element={<Gallery />} />
						<Route path='/join' element={<Join />} />
						<Route path="/submitted" element={<FormSubmitted />} />
						<Route path="/admin" element={<Admin />} />
						{/* TODO: 418 page */}
					</Routes>
					<Footer />
				</div>
			</BrowserRouter >
		</div>
	);
}

export default App;
