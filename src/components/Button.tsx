import React, { Children } from 'react';

const Button = (props: { children: React.ReactNode }) => {
  // console.log(Children.only(props?.children));
  const result: React.ReactElement[] = [];
  Children.forEach(props.children, (child, index) => {
    if (React.isValidElement(child)) {
      result.push(child);
    }
    result.push(<hr key={index} />);
  });
  const resultReverse = Children.toArray(props.children);
  resultReverse.reverse();
  return resultReverse;
  return result;
  return (
    <div>
      {Children.map(props.children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
};

export default Button;
