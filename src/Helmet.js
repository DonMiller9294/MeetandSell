import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

function Helmet() {
	return (
		<Row xs={2} md={3} className="second_column">
			{Array.from({ length: 1 }).map((_, idx) => (
				<Col key={idx}>
					<Card className="thef">
						<Card.Img variant="top" src="bike.jpg" />
						<Card.Body className="thecard">
							<center>
								<Card.Title>Bicycle</Card.Title>
							</center>
							<center>
								<Card.Text>Bicycle with a nice helmet </Card.Text>
								<Card.Text>$100</Card.Text>
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

export default Helmet;
