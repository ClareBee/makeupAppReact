import React from 'react';

class ProductDetails extends React.Component {


  render(){
    if(!this.props.product){
      return null;
    }
    var item = this.props.product;
    console.log(item);
    return(
      <article className="item">
      <figure>
      <p>{item.brand}</p>
      <h2>{item.name}</h2>
      <a href={item.product_link} target="_blank"><h3>{item.price_sign}{item.price}</h3></a>
      <img src={item.image_link} />
      <figcaption>{item.description}</figcaption>
      </figure>
    </article>
    )
  }

}

export default ProductDetails;
