import React from 'react';
interface Props {
  isLoading: boolean;
}
interface State {}
export function withLoading<T>(WrappedComponent: React.ComponentType<T>) {
  class WithLoading extends React.Component<T & Props, State> {
    constructor(props: T & Props) {
      super(props);
    }
    componentDidMount() {
      this.setState({ isLoading: this.props.isLoading });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return WithLoading;
}
