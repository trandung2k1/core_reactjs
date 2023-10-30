import React from 'react';
import { withLoading } from './HOC/withLoading';
interface Props {
  name: string;
}
const Demo: React.FC<Props> = (props) => {
  console.log(props);
  return <div>Demo</div>;
};

export default withLoading(Demo);
