import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

function Tablet() {
	return (
		<Row xs={2} md={3} className="g-4">
			{Array.from({ length: 1 }).map((_, idx) => (
				<Col key={idx}>
					<Card>
						<Card.Img variant="top" src="apple_tablet.jpg" />
						<Card.Body className="watchcard">
							<center>
								<Card.Title>Apple-ipad</Card.Title>
							</center>
							<center>
								<Card.Text>New Apple tablets for</Card.Text>
								<Card.Text>$200</Card.Text>
							</center>
							<div>
								<center>
									<button className="b3">Buy Now</button>
								</center>
							</div>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default Tablet;
