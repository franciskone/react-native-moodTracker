import React from 'react';
import { connect } from 'react-redux';
import { HeaderPresentation } from './HeaderPresentation';
import {getColorByMoodLevel} from "../../util"
import {checkInSelector} from "../../feature/checkIn/checkInSelector"

const mapStateToProps = (state, ownProps) => ({
  color: getColorByMoodLevel(checkInSelector.moodLevel(state)),
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const HeaderConnector = connect(mapStateToProps, mapDispatchToProps)(HeaderPresentation);
