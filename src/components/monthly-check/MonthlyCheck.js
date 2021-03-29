import React, { useEffect, useState } from "react";

function MonthlyCheck(props) {
  const startMonth = props.currentMonth - 3;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = props.data;
  const [frstMonth, setFrstMonth] = useState(null);
  const [scndMonth, setScndMonth] = useState(null);
  const [thrdMonth, setThrdMonth] = useState(null);

  useEffect(() => {
    const firstMonth = data.filter(
      (item) => item.date.split("/")[0].replace(/^0+/, "") == startMonth
    );
    const secondMonth = props.data.filter(
      (item) => item.date.split("/")[0].replace(/^0+/, "") == startMonth + 1
    );
    const thirdMonth = props.data.filter(
      (item) => item.date.split("/")[0].replace(/^0+/, "") == startMonth + 2
    );

    setFrstMonth(firstMonth);
    setScndMonth(secondMonth);
    setThrdMonth(thirdMonth);
  }, [props.account]);
  console.log(thrdMonth);
  return (
    <>
      {thrdMonth !== null && thrdMonth.length > 0 ? (
        <div className="prev-months">
          <h1>Reward Total of {monthNames[startMonth + 1]}</h1>
          <p>Reward Points: {thrdMonth[thrdMonth.length - 1].rewardAmount} </p>
        </div>
      ) : null}
      {scndMonth !== null && scndMonth.length > 0 ? (
        <div className="prev-months">
          <h1>Reward Total of {monthNames[startMonth]}</h1>
          <p>Reward Points: {scndMonth[scndMonth.length - 1].rewardAmount} </p>
        </div>
      ) : null}
      {frstMonth !== null && frstMonth.length > 0 ? (
        <div className="prev-months">
          <h1>Reward Total of {monthNames[startMonth - 1]}</h1>
          <p>Reward Points: {frstMonth[frstMonth.length - 1].rewardAmount} </p>
        </div>
      ) : null}
    </>
  );
}

export default MonthlyCheck;
