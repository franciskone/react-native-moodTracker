import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { getColorByMoodLevel } from '../../util';
import { faceHappyImg, faceNeutralImg, faceSadImg } from '../../assets/images';

const getFaceByMoodLevel = (level) => {
  const faces = {
    1: faceSadImg,
    2: faceSadImg,
    3: faceSadImg,
    4: faceNeutralImg,
    5: faceHappyImg,
    6: faceHappyImg,
    7: faceHappyImg,
  };

  return faces[level] || faces[4];
};

export const MoodFace = ({ level }) => (
  <Image
    style={[
      styles.img,
      { tintColor: getColorByMoodLevel(level) },
    ]}
    source={getFaceByMoodLevel(level)}
  />
);

MoodFace.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
};

MoodFace.defaultProps = {
  level: 4,
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
  },
});
