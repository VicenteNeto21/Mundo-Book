import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { tw } from 'react-native-tailwindcss';

const Rating = ({ rating }) => {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleRating = (selected) => {
    setSelectedRating(selected);
  };

  return (
    <View style={tw.flexRow}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity
          key={star}
          style={[tw.mR2]}
          onPress={() => handleRating(star)}
        >
          <FontAwesome
            name={star <= selectedRating ? 'star' : 'star-o'}
            size={24}
            color={star <= selectedRating ? '#FFD700' : 'black'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Rating;
