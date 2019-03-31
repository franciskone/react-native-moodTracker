import React from 'react';
import { connect } from 'react-redux';
import { FeelingSelectScreenPresentation } from './FeelingSelectScreenPresentation';
import { checkInAction } from '../../feature/checkIn';
import { navigationService } from '../../router';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  skip: () => {
    dispatch(checkInAction.checkInFeelingReset());
    navigationService.goToCheckInComment();
  },
});

export const FeelingSelectScreenConnector = connect(mapStateToProps, mapDispatchToProps)(FeelingSelectScreenPresentation);
