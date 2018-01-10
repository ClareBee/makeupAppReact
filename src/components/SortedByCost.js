import React from 'react';


class SortedByCost extends React.Component {
  render(){
    let sorted = [];
    this.props.products.map((item) =>{
      if((item.price < this.props.price) && (item.price > 0) && (item.price != null)){
        sorted.push(item);
      }
      return sorted;
    });
    let list = sorted.map((item) => {
      return <a className="product-link" href={item.product_link} target="_blank"><li className="list-items"><img src={item.image_link}/><div>{item.name}- ${item.price}</div></li></a>
    });
    return(
      <div>
      <ul className="container">
        {list}
      </ul>
    </div>
    )
  }
}

export default SortedByCost;
