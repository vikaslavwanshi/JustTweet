import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'; //using react bootsrap  grid structure 
import './rightpanel.css';

function RightPanel() {
    const [followStatuses, setFollowStatuses] = useState(Array(4).fill(false));

    const handleFollowClick = (index) => { //creating a follow button functionality
      const updatedStatuses = [...followStatuses];
      updatedStatuses[index] = !updatedStatuses[index];
      setFollowStatuses(updatedStatuses);
    };

  //reference(https://react-bootstrap.netlify.app/docs/layout/grid)
    return (
      <Container className="right-panel">
        <h3 className="panel-header">Who to follow</h3>
        <div>  
          <Row className="user-container align-items-center mb-3">
            <Col xs={8}>
              <p className="user-info mb-0">ElonMusk@elon</p>
            </Col>
            <Col xs={4} className="text-end">
              <Button
                className="follow-button"
                variant="primary"
                onClick={() => handleFollowClick(0)}
              >
                {followStatuses[0] ? 'Following' : 'Follow'}
              </Button>
            </Col>
          </Row>
          <Row className="user-container align-items-center mb-3">
            <Col xs={8}>
              <p className="user-info mb-0">JohnMorris@johny</p>
            </Col>
            <Col xs={4} className="text-end">
              <Button
                className="follow-button"
                variant="primary"
                onClick={() => handleFollowClick(1)}
              >
                {followStatuses[1] ? 'Following' : 'Follow'}
              </Button>
            </Col>
          </Row>
          <Row className="user-container align-items-center mb-3">
            <Col xs={8}>
              <p className="user-info mb-0">CMcgregor@conor</p>
            </Col>
            <Col xs={4} className="text-end">
              <Button
                className="follow-button"
                variant="primary"
                onClick={() => handleFollowClick(2)}
              >
                {followStatuses[2] ? 'Following' : 'Follow'}
              </Button>
            </Col>
          </Row>
          <Row className="user-container align-items-center">
            <Col xs={8}>
              <p className="user-info mb-0">Shivangi@shivu</p>
            </Col>
            <Col xs={4} className="text-end">
              <Button
                className="follow-button"
                variant="primary"
                onClick={() => handleFollowClick(3)}
              >
                {followStatuses[3] ? 'Following' : 'Follow'}
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }

export default RightPanel;