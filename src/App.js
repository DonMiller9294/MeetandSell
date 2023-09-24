import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TheNav from "./TheNav";
import Electron from "./Electron";
import Smartwatch from "./Smartwatch";
import Tablet from "./Tablet";
import Earphone from "./Earphone";
import Purse from "./Purse";
import Shoes from "./Shoes";
import Helmet from "./Helmet";
import Keyboard from "./Keyboard";
import Fender from "./Fender";
import Chairs from "./Chairs";
import BabyGear from "./BabyGear";
import PowerDrill from "./PowerDrill";
import Introduction from "./Introduction";

function App() {
	return (
		<div className="App">
			<TheNav />
			<Introduction />
			<Electron /> <Smartwatch /> <Tablet />
			<Earphone />
			<Purse />
			<Shoes />
			<Helmet />
			<Keyboard />
			<Fender />
			<Chairs />
			<BabyGear />
			<PowerDrill />
		</div>
	);
}

export default App;
