import React from 'react';
import './App.css';

function App() {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();  //will grab the current year

    const difference = +new Date(`10/01/${ year }`) - +new Date();
    //To keep the code reusable, you use a JavaScript Template Literal and add in the year variable along with the month and day of Hacktoberfest. Hacktoberfest starts on October 1st each year. When you use the year variable in place of a hard-coded year, you will always have the current year.
    //Now that you calculated the total number of milliseconds until the countdown timer expires, you need to convert the number of milliseconds to something more friendly and human-readable
  }


  return (
    <div>

    </div>
  )
}

export default App;
