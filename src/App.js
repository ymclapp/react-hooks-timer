import React, { useState, useEffect } from 'react';  //A side effect is anything that affects something outside the scope of the function being executed
import './App.css';

function App() {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();  //will grab the current year

    const difference = +new Date(`10/01/${ year }`) - +new Date();
    //To keep the code reusable, you use a JavaScript Template Literal and add in the year variable along with the month and day of Hacktoberfest. Hacktoberfest starts on October 1st each year. When you use the year variable in place of a hard-coded year, you will always have the current year.
    //Now that you calculated the total number of milliseconds until the countdown timer expires, you need to convert the number of milliseconds to something more friendly and human-readable

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days:  Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours:  Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes:  Math.floor((difference / 1000 / 60) % 60),
        seconds:  Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;  //Finally, you need to return timeLeft so that you can use the value elsewhere in the component
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());  //To use the current year instead of hard coding 2020, you can create a new state variable and set the initial state to new Date().getFullYear();

  //The useEffect is what updates the amount of time remaining. By default, React will re-invoke the effect after every render
  //Every time the variable timeLeft is updated in the state, the useEffect fires. Every time that fires, we set a timer for 1 second (or 1,000ms), which will update the time left after that time has elapsed.

//The cycle will continue every second after that.

//To help to eliminate the potential of stacking timeouts and causing an error, add the clearTimeout method inside the useEffect hook as well

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
//Here the code loops through the properties of the timeLeft object. If the timer interval has a value greater than zero, it adds an element to the timerComponents array

//The extra {" "} in the code is used so that the intervals that display the time left do not run into each other when displayed on the screen

  return (
    <div>
      <h1>Hacktoberfest { year } Countdown</h1>
      <h2>With React Hooks!</h2>
      { timerComponents.length ? timerComponents : <span> Time's up! </span>}
    </div>
  );
}

export default App;
