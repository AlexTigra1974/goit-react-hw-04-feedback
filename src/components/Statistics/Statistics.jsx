import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <list>
      <p>
        <span>Good: </span>
        {good}
      </p>
      <p>
        <span>Neutral: </span>
        {neutral}
      </p>
      <p>
        <span>Bad: </span>
        {bad}
      </p>
      <p>
        <span>Total: </span>
        {total}
      </p>
      <p>
        <span>PositiveFeedback: </span>
        {positivePercentage}%
      </p>
    </list>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
