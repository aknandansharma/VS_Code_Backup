import React from "react";

const ListOfGoals = ({ goals }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          My goal is to {goal.goal}, by {goal.deadline}.
        </li>
      ))}
    </ul>
  );
};

export default ListOfGoals;
