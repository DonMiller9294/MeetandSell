import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

function Fender() {
	return (
		<Row xs={2} md={3} className="third_column">
			{Array.from({ length: 1 }).map((_, idx) => (
				<Col key={idx}>
					<Card>
						<Card.Img variant="top" src="bass.jpg" />
						<Card.Body className="thecard">
							<center>
								<Card.Title>Bass</Card.Title>
							</center>
							<center>
								<Card.Text>Bass guitar for sale</Card.Text>
								<Card.Text>$400</Card.Text>
							</center>
							<center>
								<button className="b2"> Buy Now</button>
							</center>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default Fender;
