import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { PieChart } from 'react-native-svg-charts';
import { MoodFace } from '.';
import { COLOR } from '../util/constants';

const computedText = (entryAmount) => {
  const entry = entryAmount === 1 ? 'entry' : 'entries';
  
  return `Based on ${entryAmount} ${entry}`;
};
export class DonutChart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: '',
        value: 0,
        color: '',
      },
      labelWidth: 0,
    };
  }
  
  componentDidMount() {
    this.selectHighestValueItem();
  }
  
  selectHighestValueItem = () => {
    const { data } = this.props;
    let higherValue = data[0];
  
    data.forEach((item) => {
      higherValue = item.value > higherValue.value ? item : higherValue;
    });
  
    const { key, value, color } = higherValue;
    this.setState({ selectedSlice: { label: key, value, color } });
  }

  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    
    const fullData = this.props.data.map(({ key, value, color }, index) => ({
      key,
      value,
      svg: { fill: color },
      arc: { outerRadius: `${70 + value}%`, padAngle: label === key ? 0.1 : 0 },
      onPress: () => this.setState({ selectedSlice: { label: key, value, color } }),
    }));
    
    return (
      <View style={styles.mainContainer}>
        <View style={styles.leftSideContainer}>
          <PieChart
            style={{ height: '100%' }}
            outerRadius="70%"
            innerRadius="45%"
            data={fullData}
          />
          <View
            onLayout={({ nativeEvent: { layout: { width } } }) => {
              this.setState({ labelWidth: width });
            }}
            style={styles.faceOuterContainer}
          >
            <View style={styles.faceInnerContainer}>
              <MoodFace level={selectedSlice.label} />
            </View>
          </View>
        </View>
  
        <View style={styles.rightSideContainer}>
          <Text style={{ color: selectedSlice.color, fontSize: 50, fontWeight: '200' }}>
            {`${selectedSlice.value} %`}
          </Text>
          {!!this.props.entryAmount
            && (
            <Text style={{ color: COLOR.DARK_GRAY }}>
              {computedText(this.props.entryAmount)}
            </Text>
            )
          }
        </View>
      </View>
    );
  }
}

DonutChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.number,
    color: PropTypes.string,
  })),
  entryAmount: PropTypes.number,
};
DonutChart.defaultProps = {
  entryAmount: null,
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLOR.WHITE,
  },
  leftSideContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    flex: 1,
  },
  faceOuterContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  faceInnerContainer: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
