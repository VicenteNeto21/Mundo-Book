import React, { useState } from 'react';
import { Text } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { tw } from 'react-native-tailwindcss';
import Rating from './Rating';

const BookCard = ({ title, author, url }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <Card style={tw.mB4}>
      <CardItem>
        <Body>
          <Text style={[tw.textLg, tw.fontBold]}>{title}</Text>
          <Text note style={[tw.textGray600, tw.fontBold]}>
            {author}
          </Text>
          <Text style={[tw.textGray700, tw.mT2]}>{url}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Rating initialRating={rating} onRatingChange={handleRatingChange} />
      </CardItem>
    </Card>
  );
};

export default BookCard;
