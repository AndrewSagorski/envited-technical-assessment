import { Container, Row, Col } from "react-bootstrap";

const Event = () => {
    return (  
        <div className="event-page min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <div className="event-title">Birthday Bash</div>
                        <div className="event-subtext">Hosted by <strong>Elysia</strong></div>
                        <div className="date-section">
                            <div className="fw-bold event-date">18 August 6:00PM</div>
                        </div>
                        
                    </Col>

                    <Col><div className="event-image"></div></Col>
                </Row>
            </Container>
        </div>

        
    );
}
 
export default Event;