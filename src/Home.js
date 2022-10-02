import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Routes, Route, useNavigate} from 'react-router-dom';
import CreateEvent from "./CreateEvent";

const Home = () => {
    const navigate = useNavigate();

    const navigateToCreate = () => {        
        navigate('/create_event');
    };
    

    return (   
        <div className="home d-flex min-vh-100 align-items-center justify-content-center content">
            <Container>
                <Row>
                    <Col style={{marginLeft: '25vh'}}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221002T090816Z&X-Amz-Expires=86400&X-Amz-Signature=2a6c4ca8d07b352011ad6a7518806c19ae4eae8004e35b6314e994cde5d17efe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject" />
                        </Card>
                    </Col>
                    <Col style={{marginTop: '15vh', textAlign: 'right', paddingRight: '10vw'}}>
                        <span className="landing-header">Imagine if</span>
                        <span className="landing-header-bold"><br></br>Snapchat</span>
                        <span className="landing-header"><br></br>had events.</span>
                        <span className="landing-text"><br></br>Easily host and share events with your friends across any social media.</span>
                        <Button onClick={navigateToCreate} className="mt-3 button-colour btn">🎉 Create my event</Button>
                    </Col>
                </Row>                
            </Container>    
        </div>
           
        
    );
}
 
export default Home;