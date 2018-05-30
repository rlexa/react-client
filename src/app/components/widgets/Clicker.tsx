import * as React from 'react';

export class Clicker extends React.Component<any, { color?: string }> {
  constructor(props: any) {
    super(props);
    this.state = { color: 'red' };
  }

  onClick = () => this.setState((state, props) => ({ color: state.color === 'red' ? 'green' : 'red' }));

  render() {
    return (<button onClick={this.onClick}><span style={{ color: this.state.color }}>CLICK ME</span></button>);
  }
}
