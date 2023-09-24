import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TheNav() {
	return (
		<Navbar
			bg="dark"
			data-bs-theme="dark"
			expand="lg"
			className="bg-body-tertiary"
		>
			<Container fluid>
				<Navbar.Brand href="#">
					<img
						src="favicon.ico"
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt="M&S"
					/>
				</Navbar.Brand>
				<Nav
					className="me-auto my-2 my-lg-0"
					style={{ maxHeight: "100px" }}
					navbarScroll
				></Nav>
				<Nav.Link
					className="login"
					style={{ color: "white" }}
					href="#Loginpage"
				>
					Login
				</Nav.Link>
				<Nav.Link
					className="signup"
					style={{ color: "white" }}
					href="#Signuppage"
				>
					Sign up
				</Nav.Link>
				<Form className="d-flex">
					<Form.Control
						type="Search items for sale"
						placeholder="Search items for sale"
						className="me-2"
						aria-label="Search items for sale"
					/>
					<Button variant="light">Search</Button>
				</Form>
			</Container>
		</Navbar>
	);
}

export default TheNav;
