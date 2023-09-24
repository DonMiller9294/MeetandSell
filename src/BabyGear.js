import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

function BabyGear() {
	return (
		<Row xs={2} md={3} className="third_column">
			{Array.from({ length: 1 }).map((_, idx) => (
				<Col key={idx}>
					<Card>
						<Card.Img variant="top" src="babyitems.jpg" />
						<Card.Body className="thecard">
							<center>
								<Card.Title>Baby items</Card.Title>
							</center>
							<center>
								<Card.Text>Toys and books for your baby</Card.Text>
								<Card.Text>$35</Card.Text>
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

export default BabyGear;
