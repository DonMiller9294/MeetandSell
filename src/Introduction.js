import Badge from "react-bootstrap/Badge";

function Intro() {
	return (
		<div className="theintro">
			<h1>
				<Badge className="h1" bg="secondary">
					{" "}
					Welcome to Meet and Sell a social media platform for local buyers and
					sellers.
				</Badge>
			</h1>
		</div>
	);
}

export default Intro;
