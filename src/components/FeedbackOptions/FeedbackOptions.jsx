import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

 const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.thumb}>
      {options.map(option => (
        <button
          key={option}
          className={css.btn}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;