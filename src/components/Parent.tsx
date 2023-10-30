import React from 'react';
import Children from './Children';
interface Props {
  name: string;
}
const Parent: React.FC<Props> = (props) => {
  return (
    <>
      <Children name={props.name} render={(data) => <h1>{data}</h1>} />
    </>
  );
};

export default Parent;
