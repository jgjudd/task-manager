import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const TaskCard = ({ text }) => {
  return (
    <Card style={style.cardContainer}>
      <CardContent>
        <Typography gutterBottom>{ text }</Typography>
      </CardContent>
    </Card>
  );
};

const style = {
  cardContainer: {
    marginBottom: 8
  }
}

export default TaskCard;
