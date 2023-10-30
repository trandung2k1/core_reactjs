import React from 'react';
import { ThemeContext, TypeThemeContext } from './context/ThemeContext';
import Parent from './components/Parent';
import Button from './components/Button';
import TabSwitcher from './components/TabSwitcher';
import Tab from './components/Tab';
import RowList from './components/RowList';
import Row from './components/Row';
import Demo from './components/Demo';
import { Clone } from './components/Clone';
interface Props {
  name: string;
}

interface State {
  count: number;
}

class App extends React.Component<Props, State> {
  static contextType = ThemeContext;
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = { count: 1 };
  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    const context = this.context as TypeThemeContext;
    console.log(context);
    return (
      <>
        <h1>{name}</h1>
        <h2>{count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase</button>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleClick}>Increase</button>
        <Parent name="Tran Van Dung" />
        <Button>
          <p>Hehe 1</p>
          <p>Hehe 2</p>
        </Button>
        <TabSwitcher
          tabs={[
            {
              id: 'first',
              header: 'First',
              content: <p>This is the first item.</p>,
            },
            {
              id: 'second',
              header: 'Second',
              content: <p>This is the second item.</p>,
            },
            {
              id: 'third',
              header: 'Third',
              content: <p>This is the third item.</p>,
            },
          ]}
        />
        <Tab
          tabIds={['first', 'second', 'third']}
          getHeader={(tabId) => {
            return tabId[0].toUpperCase() + tabId.slice(1);
          }}
          renderContent={(tabId) => {
            return <p>This is the {tabId} item.</p>;
          }}
        />
        <RowList
          rowIds={['first', 'second', 'third']}
          renderRow={(id, index) => {
            return (
              <Row isHighlighted={index % 2 === 0}>
                <p>This is the {id} item.</p>
              </Row>
            );
          }}
        />
        <Demo name="Dung" isLoading={true} />
        <Clone />
      </>
    );
  }
}

export default App;
