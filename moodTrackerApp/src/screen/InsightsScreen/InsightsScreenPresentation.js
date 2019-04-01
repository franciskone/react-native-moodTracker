import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Button, DonutChart, Header } from '../../components';
import { navigationService } from '../../router';
import { COLOR, STYLE } from '../../util/constants';

export const InsightsScreenPresentation = ({ chartData, checkInAmount }) => (
  <>
    <Header
      overrideColor={COLOR.AQUA_DARK}
      title="Mood Insights"
    />
    <View style={styles.container}>
      {!!chartData.length && <DonutChart data={chartData} entryAmount={checkInAmount} />}
      <View style={{
        flex: 3,
        backgroundColor: COLOR.WHITE,
        marginVertical: STYLE.PADDING.SMALL,
      }}
      />
      <Button
        label="track your feelings"
        action={navigationService.goToCheckInMood}
        style={{ marginTop: STYLE.PADDING.MEDIUM }}
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
});
