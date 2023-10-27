import React from 'react';
import Card from './Card';
import staffList from '../staffList';
import { Button } from 'semantic-ui-react';

import "../CSS/Card.css"

function cardComponent(staff) {
  return (
    <Card
      key={staff.key}
      avatar={staff.avatar}
      name={staff.name}
      position={staff.position}
      rating={staff.rating}
      author={staff.author}
    />
  );
}

function CardList() {
  return (
    <div className='upper'>
      <h2>Featured Articles</h2>
      <div className='row'>
        {staffList.slice(0, 3).map(cardComponent)}
      </div>
      <Button>See all articles</Button>

      <h2>Featured Tutorials</h2>
      <div className='row'>
        {staffList.slice(3, 6).map(cardComponent)}
      </div>
      <Button>See all tutorials</Button>
    </div>
  );
}

export default CardList;