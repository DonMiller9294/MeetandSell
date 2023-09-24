import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

function Earphone() {
	return (
		<Row xs={2} md={3} className="g-4">
			{Array.from({ length: 1 }).map((_, idx) => (
				<Col key={idx}>
					<Card>
						<Card.Img variant="top" src="airpods.jpg" />
						<Card.Body className="watchcard">
							<center>
								<Card.Title>AirPods</Card.Title>
							</center>
							<center>
								<Card.Text>Get your brand new Apple AirPods for</Card.Text>
								<Card.Text>$80</Card.Text>
							</center>
							<center>
								<button className="b4">Buy Now</button>
							</center>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default Earphone;
