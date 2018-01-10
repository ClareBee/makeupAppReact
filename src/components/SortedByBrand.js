import React from 'react';
import filter from 'lodash/filter';

class SortedByBrand extends React.Component {
  render(){

    var sortedmakes = filter(this.props.products, {'brand' : this.props.brand});
    console.log(sortedmakes);
    var listItems = sortedmakes.map((item) => {
      return <li>{item.name}</li>
    })
    return(
      <div>
      <p>this is the sorted by brand list</p>
      <h3>{this.props.brand}</h3>
      <ul>
        {listItems}
      </ul>  
    </div>
    )
  }

}

export default SortedByBrand;
