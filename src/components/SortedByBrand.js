import React from 'react';
import filter from 'lodash/filter';

class SortedByBrand extends React.Component {
  constructor(props){
    super(props);

  }


  render(){

    let sortedmakes = filter(this.props.products, {'brand' : this.props.brand});
    console.log(sortedmakes);
    let listItems = sortedmakes.map((item) => {
      return <a className="product-link" href={item.product_link} target="_blank"><li className="list-items"><img src={item.image_link}/><div>{item.name}</div></li></a>
    });
    return(
      <div>
      <h3 id="brand-title">{this.props.brand}</h3>
      <ul className="container">
        {listItems}
      </ul>
    </div>
  );
  }
}

export default SortedByBrand;
