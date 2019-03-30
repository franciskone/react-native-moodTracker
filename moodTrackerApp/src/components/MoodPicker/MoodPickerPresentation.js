import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {MoodFace} from "./MoodFace"
import {MoodSlider} from "./MoodSlider"

export class MoodPickerPresentation extends React.Component {
  state = {
    moodLevel: 4,
  };
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
  onMoodChange = (moodLevel) => this.setState({moodLevel});
  
  render() {
    return (<View style={{
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <MoodFace level={this.state.moodLevel}/>
      <MoodSlider onChange={this.onMoodChange}/>
    </View>);
  }
}

MoodPickerPresentation.propTypes = {};
MoodPickerPresentation.defaultProps = {};

const styles = StyleSheet.create({});
