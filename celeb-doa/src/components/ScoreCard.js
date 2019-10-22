import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ScoreCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle> Card Score (Ex. 20/20 or however we're doing it)</CardTitle>
          <CardSubtitle>Score Percentage (Ex. 100% idk)</CardSubtitle>
          <CardText>Date of Test (Ex. 10/22/2019, maybe use moment.js or ?? or change it completely)</CardText>
          <Button>Delete Button (Will Prompt user w/ module "Are you sure you want to delete this Score? Yes/No)</Button> 
        </CardBody>
      </Card>
    </div>
  );
};

export default ScoreCard;