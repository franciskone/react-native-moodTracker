import React from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity, LayoutAnimation } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLOR, STYLE } from '../../util/constants';
import { MoodFace } from '..';

const months = [
  'gen',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'ago',
  'sep',
  'oct',
  'nov',
  'dic',
];

const FeelingList = ({list}) => (
  <View style={{flexDirection: 'row'}}>
    {list.map(item => (
        <View style={{
          marginVertical: STYLE.PADDING.MEDIUM,
          marginRight: STYLE.PADDING.MEDIUM,
          backgroundColor: COLOR.LIGHT_GRAY,
          paddingVertical: STYLE.PADDING.SMALL,
          paddingHorizontal: STYLE.PADDING.MEDIUM,
          borderRadius: STYLE.BORDER_RADIUS.SMALL
        }}>
          <Text style={{textTransform: 'capitalize'}}>{item}</Text>
        </View>
      )
    )}
  </View>
);

export class MoodHistoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  
  // LifeCycle methods
  // componentWillMount() {}
  // componentDidMount() {}
  // componentWillUnmount() {}
  // componentWillReceiveProps(nextProps) {}
  // shouldComponentUpdate(nextProps, nextState) {return true}
  // componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  
  // Component methods
  
  toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({isExpanded: !this.state.isExpanded})
  }
  
  
  render() {
    const {
      id, moodLevel, feelingSelectedList, comment, timestamp,
    } = this.props.data;
  
    const date = new Date(timestamp);
    const month = date.getMonth();
    const day = date.getDate();
    // const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    
    const time = `${hour}:${minute}`;
  
    return (
      <Animated.View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.leftContainer}>
            <View style={styles.dayContainer}>
              <Text style={{ marginBottom: -3, color: COLOR.GRAY }}>{day}</Text>
              <Text style={{ textTransform: 'uppercase', color: COLOR.DARK_GRAY }}>{months[month]}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={{color: COLOR.DARK_GRAY}}>{time}</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <MoodFace style={{ width: 30, height: 30 }} level={moodLevel} />
            <TouchableOpacity
              onPress={this.toggle}
              activeOpacity={STYLE.TOUCHABLE_ACTIVE_OPACITY}
            >
              <Icon
                name={`ios-arrow-${this.state.isExpanded ? 'up' : 'down'}`}
                size={30}
                color={COLOR.DARK_GRAY}
              />
            </TouchableOpacity>
          </View>
        </View>
       
        {this.state.isExpanded && (
          <View style={styles.bottomContainer}>
            <FeelingList list={feelingSelectedList} />
            <Text style={{color: COLOR.DARK_GRAY}}>{comment}</Text>
          </View>
        )}
      </Animated.View>
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
    padding: STYLE.PADDING.MEDIUM,
    marginBottom: STYLE.PADDING.SMALL,
    backgroundColor: COLOR.WHITE
  },
  
  topContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 3,
    flexDirection: 'row',
    paddingVertical: STYLE.PADDING.MEDIUM,
  },
  dayContainer: {
    paddingLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeContainer: {
    paddingLeft: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  
  bottomContainer: {
    padding: 20,
  }
});
