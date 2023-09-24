import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

function Smartwatch() {
	return (
		<Row xs={2} md={3} className="g-4">
			{Array.from({ length: 1 }).map((_, idx) => (
				<Col key={idx}>
					<Card>
						<Card.Img variant="top" src="watch.jpg" />
						<Card.Body className="watchcard">
							<center>
								<Card.Title>Apple-Watch</Card.Title>
							</center>
							<center>
								<Card.Text>Great watch needs a new home</Card.Text>
								<Card.Text>$75</Card.Text>
							</center>
							<center>
								<button className="b1">Buy Now</button>
							</center>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default Smartwatch;
