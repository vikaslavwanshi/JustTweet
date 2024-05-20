import React from 'react';
import { Row, Col } from 'react-bootstrap'; //using React bootstrap format 
import './profilestats.css';

function ProfileStats({ tweetsCount }) {
  const followersCount = 200;
  const followingCount = 197;
  const likesCount = 1000;
// Reference https://react-bootstrap.netlify.app/docs/layout/grid
  return (
    <div className="profile-stats">
      <Row>
        <Col>
          <div className="stat-item">
            <span className="stat-label">Tweets</span>
            <span className="stat-count">{tweetsCount}</span>
          </div>
        </Col>
        <Col>
          <div className="stat-item">
            <span className="stat-label">Followers</span>
            <span className="stat-count">{followersCount}</span>
          </div>
        </Col>
        <Col>
          <div className="stat-item">
            <span className="stat-label">Following</span>
            <span className="stat-count">{followingCount}</span>
          </div>
        </Col>
        <Col>
          <div className="stat-item">
            <span className="stat-label">Likes</span>
            <span className="stat-count">{likesCount}</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProfileStats;
