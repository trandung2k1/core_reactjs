import React from 'react';
interface Props {
  render: (data: string) => React.ReactElement;
  name: string;
}
const Children: React.FC<Props> = (props) => {
  return <div>{props.render(props.name)}</div>;
};

export default Children;
