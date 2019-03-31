import React from 'react';
import { connect } from 'react-redux';
import { HeaderPresentation } from './HeaderPresentation';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const HeaderConnector = connect(mapStateToProps, mapDispatchToProps)(HeaderPresentation);
