import React from 'react';

export const gridDirection = (width) => width === 'xs' ? 'row-reverse' : 'row';

class HeaderHomepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Header</p>
      </React.Fragment>
    );
  }
}

export default HeaderHomepage;
