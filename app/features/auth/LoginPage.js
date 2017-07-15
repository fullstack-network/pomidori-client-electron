import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login';
import { login } from './Actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => {
      dispatch(login(email, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
