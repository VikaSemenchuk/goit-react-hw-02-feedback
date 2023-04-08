export const FeedbackOptions = ({ options, handlerClick }) => {
  console.log('options :>> ', options);
  return (
    // <section
    //   className="blockquote "
    //   style={{
    //     // height: '50px',
    //     // display: 'flex',
    //     // justifyContent: 'center',
    //     // alignItems: 'center',
    //     paddingLeft: '10px',
    //     marginBottom: '10px',

    //     fontSize: 40,
    //     color: '#05509b',
    //   }}
    // >
    //   {/* <h2
    //     style={{
    //       // height: '50px',
    //       // display: 'flex',
    //       // justifyContent: 'center',
    //       // alignItems: 'center',
    //       paddingLeft: '10px',
    //       marginBottom: '10px',

    //       fontSize: 40,
    //       color: '#05509b',
    //     }}
    //   >
    //     Please leave your feedback
    //   </h2> */}
      <div
        className="d-md-flex justify-content-md-start"
        style={{
          paddingLeft: '10px',
          gap: '10px',
          marginBottom: '30px',
        }}
      >
        {options.map(option => (
          <button
          key={option}
            type="button"
            className="btn btn-outline-primary btn-lg"
            onClick={() => handlerClick(option)}
          >
            {option}
          </button>
        ))}
        {/* <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={this.handlerClickGood}
          >
            Good
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={this.handlerClickNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={this.handlerClickBad}
          >
            Bad
          </button> */}
      </div>
    // </section>
  );
};
