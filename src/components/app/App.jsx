import { useState } from 'react';
import { Statistics } from '../statistics/Statistics';
import { SectionTitle } from '../sectiontitle/SectionTitle';
import { FeedBackOptions } from '../feedbackoptions/FeedbackOptions';
import { Notification } from '../notification/Notification';

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
