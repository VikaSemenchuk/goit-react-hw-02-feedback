export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <ul>
      {/* <h2 style={{
              // height: '50px',
              // display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center',
              paddingLeft: '10px',
              marginBottom: '10px',

              fontSize: 40,
              color: '#05509b',
            }}>Statistics</h2> */}

      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {total}</li>
      <li>percent: {percent}%</li>
    </ul>
  );
};
