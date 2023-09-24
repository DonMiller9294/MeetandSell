import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

function Purse() {
	return (
		<Row xs={2} md={3} className="second_column">
			{Array.from({ length: 1 }).map((_, idx) => (
				<Col key={idx}>
					<Card>
						<Card.Img variant="top" src="handbag.jpg" />
						<Card.Body className="thecard">
							<center>
								<Card.Title>Purse</Card.Title>
							</center>
							<center>
								<Card.Text>Vintage purse for</Card.Text>
								<Card.Text>$30</Card.Text>
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

export default Purse;
