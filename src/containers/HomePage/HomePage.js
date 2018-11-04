import React, { Component } from 'react';

import HeaderHomepage from '../../components/HeaderHomepage/HeaderHomepage';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <React.Fragment>
        <HeaderHomepage />
        <p>Body</p>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
