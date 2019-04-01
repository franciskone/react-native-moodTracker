import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { STYLE } from '../../util/constants';
import { MoodFace } from '..';

export class MoodHistoryItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  
  // LifeCycle methods
  // componentWillMount() {}
  // componentDidMount() {}
  // componentWillUnmount() {}
  // componentWillReceiveProps(nextProps) {}
  // shouldComponentUpdate(nextProps, nextState) {return true}
  // componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  
  // Component methods
  
  render() {
    const {
      moodLevel, feelingSelectedList, comment, timestamp,
    } = this.props.data;
  
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer} />
        <View style={styles.rightContainer}>
          <MoodFace level={moodLevel} />
        </View>
      </View>
    );
  }
}

MoodHistoryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    moodLevel: PropTypes.number,
    feelingSelectedList: PropTypes.arrayOf(PropTypes.string),
    comment: PropTypes.string,
    timestamp: PropTypes.number,
  }).isRequired,
};
MoodHistoryItem.defaultProps = {

};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'red',
    flexDirection: 'row',
    minHeight: 30,
  
    // justifyContent: 'center',
    // paddingTop: 30,
    // borderRadius: 2,
  },
  leftContainer: {
    backgroundColor: 'blue',
    flex: 3,
  },
  rightContainer: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
