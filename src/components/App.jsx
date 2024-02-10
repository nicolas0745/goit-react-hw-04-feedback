import { useState } from 'react';
import { Statistics } from './Statistics';
import { SectionTitle } from './SectionTitle';
import { FeedBackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleAdd = evt => {
//     const { name } = evt.target;
//     this.setState(s => {
//       return { [name]: s[name] + 1 };
//     });
//   };
//   countTotalFeedback = () => {
//     const allValues = Object.values(this.state).reduce((a, b) => a + b);
//     return allValues;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return (this.state.good / this.countTotalFeedback()) * 100;
//   };
//   render() {
//     return (
//       <>
//         <SectionTitle title="Please leave feedback">
//           <FeedBackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleAdd}
//           />
//         </SectionTitle>
//         <SectionTitle title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={Math.round(
//                 this.countPositiveFeedbackPercentage()
//               )}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </SectionTitle>
//       </>
//     );
//   }
// }
// const countPositiveFeedbackPercentage = () => {
//       return (this.state.good / this.countTotalFeedback()) * 100;
//   };
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  const handleAdd = evt => {
    const { name } = evt.target;
    if (name === 'good') {
      setGood(good + 1);
      return;
    } else if (name === 'neutral') {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  return (
    <>
      <SectionTitle title="Please leave feedback">
        <FeedBackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleAdd}
        />
      </SectionTitle>
      <SectionTitle title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={Math.round(countPositiveFeedbackPercentage())}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </SectionTitle>
    </>
  );
};

export { App };
