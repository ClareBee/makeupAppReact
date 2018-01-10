import React from 'react';

class ColourPalette extends React.Component {
  render(){
    let palette = this.props.colours.map((colour) => {
      return   <li id="colours">
          <input disabled title={colour['colour_name']} type="color" id="color-picker" value={colour['hex_value']}/>
        </li>
    })
    return(

      <ol>{palette}</ol>
    )
  }
}

export default ColourPalette;
