import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import hongo from '../../images/mushrooms/image4.jpg';

const BackgroundImage = styled.div`
  background: url(${hongo}) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: ${(props) => props.height}px;
`;

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }


  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div>
        <BackgroundImage width={this.state.width} height={this.state.height} >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </BackgroundImage >
      </div >
    );
  }
}
