import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class Footing extends Component {
  render() {
    return (
      <div id='footing'>
        <Segment basic textAlign='center'>
          <p>Copyright © 2018 RC Precision Grinding.<br />All rights reserved.</p>
        </Segment>
      </div>
    );
  };
};

export default Footing;
