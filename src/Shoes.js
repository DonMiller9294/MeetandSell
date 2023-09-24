import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

function Shoes() {
	return (
		<Row xs={2} md={3} className="second_column">
			{Array.from({ length: 1 }).map((_, idx) => (
				<Col key={idx}>
					<Card className="thef">
						<Card.Img variant="top" src="heels.jpg" />
						<Card.Body className="thecard">
							<center>
								<Card.Title>Heels</Card.Title>
							</center>
							<center>
								<Card.Text>White heels in really good condition</Card.Text>
								<Card.Text>$40</Card.Text>
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

export default Shoes;
