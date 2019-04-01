import React from 'react';
import { connect } from 'react-redux';
import { FeelingPickerPresentation } from './FeelingPickerPresentation';
import { checkInSelector } from '../../feature/checkIn/checkInSelector';
import { checkInAction } from '../../feature/checkIn';

const mapStateToProps = state => ({
  feelingFullList: checkInSelector.feelingFullList(state),
});

const mapDispatchToProps = dispatch => ({
  toggleFeeling: feelingId => dispatch(checkInAction.checkInFeelingToggle(feelingId)),
});

export const FeelingPickerConnector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeelingPickerPresentation);
