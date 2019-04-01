import React from 'react';
import { connect } from 'react-redux';
import { InsightsScreenPresentation } from './InsightsScreenPresentation';
import {insightsSelector} from "../../feature/insights"

const mapStateToProps = (state, ownProps) => ({
  chartData: insightsSelector.averageMoodForChart(state),
  checkInAmount: insightsSelector.checkInAmount(state),
  moodHistoryList: insightsSelector.checkInList(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const InsightsScreenConnector = connect(mapStateToProps, mapDispatchToProps)(InsightsScreenPresentation);
