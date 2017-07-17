import { connect } from 'react-redux';
import LoggedIn from '../components/LoggedIn';
import { turnOnLight } from '../features/light/Actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line no-unused-vars
  return {
    turnOnLight: (minutes) => {
      dispatch(turnOnLight(minutes));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
