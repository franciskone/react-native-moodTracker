import React from 'react';
import {
  SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button, DonutChart, Header, MoodHistoryList } from '../../components';
import { navigationService } from '../../router';
import { COLOR, STYLE } from '../../util/constants';

export const InsightsScreenPresentation = ({ chartData, checkInAmount, moodHistoryList }) => (
  <>
    <Header
      overrideColor={COLOR.AQUA_DARK}
      title="Mood Insights"
    />
    <View style={styles.container}>
      {!!chartData.length && <DonutChart data={chartData} entryAmount={checkInAmount} />}
      
      <View style={styles.historyListContainer}>
        <MoodHistoryList data={moodHistoryList} />
      </View>
      
      <Button
        label="track your feelings"
        action={navigationService.goToCheckInMood}
        style={{ marginTop: STYLE.PADDING.SMALL }}
      />
      <SafeAreaView />
    </View>
  </>
);

InsightsScreenPresentation.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.number,
    color: PropTypes.string,
  })).isRequired,
  
  moodHistoryList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    moodLevel: PropTypes.number,
    feelingSelectedList: PropTypes.arrayOf(PropTypes.string),
    comment: PropTypes.string,
    timestamp: PropTypes.number,
  })).isRequired,
};
InsightsScreenPresentation.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.ULTRA_LIGHT_GRAY,
    padding: STYLE.SCREEN_PADDING,
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  historyListContainer: {
    flex: 3,
    marginVertical: STYLE.PADDING.SMALL,
  },
});
