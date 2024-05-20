import React from 'react';
import './profilecover.css';  //importing css file for styling
import { Row, Col } from 'react-bootstrap'; //using react bootstrap for framing layout
import Image from 'react-bootstrap/Image';  //using react bootstrap for image layout

const ProfileCover = () => {
  return (
    <div className="cover-page">
      <div className="cover-image">
        <h1>JustTweet</h1>
      </div>
      <div className="profile-image">
        <Image src="/MyPhoto.png" rounded />
      </div>
      <Row>
        <Col sm={6} className="my-2">
        </Col>
      </Row>
    </div>
  );
};

export default ProfileCover;
