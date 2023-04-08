import { Component } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';
import { Section } from './section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerClick = el => {
    this.setState(prevState => ({
      [el]: prevState[el] + 1,
    }));
  };

  totalClick(good, neutral, bad) {
    return good + neutral + bad;
  }

  percentCount(total, good) {
    return Math.round((good * 100) / total);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalClick(good, neutral, bad);
    const percent = this.percentCount(total, good);

    return (
      <>
        <Section title='Please leave your feedback'>
          <FeedbackOptions
            options={Object.keys(this.state)}
            handlerClick={this.handlerClick}
          />
          {/* {console.log('options :>> ', options)} */}
        </Section>

        {total > 0 ? (
          <Section title="Statistics">
            {/* <h2
              style={{
                // height: '50px',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                paddingLeft: '10px',
                marginBottom: '10px',

                fontSize: 40,
                color: '#05509b',
              }}
            >
              Statistics
            </h2> */}
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={percent}
            />
            {/* <div>good: {good}</div>
            <div>neutral: {neutral}</div>
            <div>bad: {bad}</div>
            <div>total: {total}</div>
            <div>percent: {this.percent}%</div> */}
          </Section>
        ) : (
          <Section>
            <Notification message="There is no feedback"/>

            {/* {console.log('options >> ', Object.keys(this.state))} */}
          </Section>
        )}
      </>
      // <div
      //   style={{
      //     height: '100vh',
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101'
      //   }}
      // >
      //   React homework template
      // </div>
    );
  }
}
