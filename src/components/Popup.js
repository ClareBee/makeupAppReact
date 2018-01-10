import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Overlay from 'react-bootstrap/lib/Overlay';
import Button from 'react-bootstrap/lib/ButtonToolbar';
import Popover from 'react-bootstrap/lib/Popover';

class Popup extends React.Component {
  constructor(props, context) {
  super(props, context);

  this.handleClick = e => {
    this.setState({ target: e.target, show: !this.state.show });
  };

  this.state = { show: false };
}
  render(){
    return(
      <ButtonToolbar>
        <Button onClick={this.handleClick}>Holy guacamole!</Button>

      <Overlay
        show={this.state.show}
        target={this.state.target}
        placement="bottom"
        container={this}
        containerPadding={20}
      >
        <Popover id="popover-contained" title="Popover bottom">
          <strong>Holy guacamole!</strong> Check this info.
        </Popover>
      </Overlay>
    </ButtonToolbar>

  )
}
}

export default Popup;
