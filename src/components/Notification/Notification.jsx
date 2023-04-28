import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <h1 className={css.title}>{message}</h1>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification
