import { connect } from 'react-redux';
import { checkInSelector } from '../../feature/checkIn/checkInSelector';
import { checkInAction } from '../../feature/checkIn';
import { MoodPickerPresentation } from './MoodPickerPresentation';

const mapStateToProps = state => ({
  moodLevel: checkInSelector.moodLevel(state),
});

const mapDispatchToProps = dispatch => ({
  setMoodLevel: level => dispatch(checkInAction.checkInMoodLevelSet(level)),
});

export const MoodPickerConnector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoodPickerPresentation);
