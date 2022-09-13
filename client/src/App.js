import "./index.css";
import "./form.css";
import "./gallery.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages

import Home from "./pages/Home";
import Join from "./pages/Join";
import Gallery from "./pages/Gallery";
import FormSubmitted from "./pages/FormSubmitted";
import Admin from "./pages/Admin";

//COMPONENTS

import Navbar from "./components/Navbar";

document.title = "KWT";

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
				</div>
			</BrowserRouter >
		</div>
	);
}

export default App;
