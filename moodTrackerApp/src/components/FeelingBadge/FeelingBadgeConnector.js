import React from 'react';
import { connect } from 'react-redux';
import { FeelingBadgePresentation } from './FeelingBadgePresentation';
import { checkInAction } from '../../feature/checkIn';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  action: () => dispatch(checkInAction.checkInFeelingToggle(ownProps.data.id)),
  // action: () => alert(`delete feeling: ${ownProps.data.id}`),
});

export const FeelingBadgeConnector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeelingBadgePresentation);
