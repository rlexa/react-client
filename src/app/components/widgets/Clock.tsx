import * as React from 'react';

interface IProps { asIso?: boolean }

export class Clock extends React.Component<IProps, { date: Date }> {
  constructor(props: IProps) {
    super(props);
    this.state = { date: new Date() };
  }

  private handleTimer: any = null;

  private tick = () => this.setState((state, props) => ({ date: new Date() }));

  componentDidMount() {
    this.handleTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handleTimer);
  }

  render() {
    return (<label>It is {this.props.asIso ? this.state.date.toISOString() : this.state.date.toLocaleTimeString()}.</label>);
  }
}
