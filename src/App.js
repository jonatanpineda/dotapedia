import React from "react";
import Navbar from "./components/Navbar";
import {Provider} from "react-redux";
import {store} from './store';
import Router from "./components/Router";

function App() {
  return (
  	<Provider store={store}>
			<div className="font-sans flex flex-col min-h-screen w-full bg-black">
				<Navbar/>
				<Router />
			</div>
		</Provider>
  );
}

export default App;
