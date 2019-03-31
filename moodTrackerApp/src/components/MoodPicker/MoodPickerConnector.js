import React from 'react';
import { connect } from 'react-redux';
import { Presentation } from './Presentation';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const Connector = connect(mapStateToProps, mapDispatchToProps)(Presentation);
