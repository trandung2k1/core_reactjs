import React from 'react';
// const Element = <p>Hello</p>;
const Component = ({ children, ...props }: { children?: React.ReactNode }) => {
  if (children) {
    return <div {...props}>{children}</div>;
  }
  return <div>Haha</div>;
};
export const Clone = () => {
  //   const CloneElement = React.cloneElement(Element, { title: 'This is title' }, 'Hi');
  const CloneComponent = React.cloneElement(
    <Component />,
    { title: 'This is title' },
    'Hello, world',
  );
  return CloneComponent;
};
