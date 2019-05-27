import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const Header: React.FC = () => {
    return (
        <Jumbotron fluid className="header">
            <Container>
                <h1>Film Hunt</h1>
                <p>
                    Hunt for your next film to watch! &#129488;
                </p>
            </Container>
        </Jumbotron>
    );
};

export default Header;