import React from 'react';
import ColourPalette from "./ColourPalette";
class ProductDetails extends React.Component {


  render(){
    if(!this.props.product){
      return null;
    }
    var item = this.props.product;
    console.log(item);
    let colours = []
    this.props.product.product_colors.map((item) =>{
      if(this.props.product.product_colors.length > 0){
        colours.push(item)
      }
      return colours;
    });


    return(

        <figure className="item">
          <h2>{item.name}</h2>
          <h2>{item.brand}</h2>
          <a className="price-link" href={item.product_link} target="_blank"><i class="fa fa-shopping-basket fa-5x" aria-hidden="true"></i><h3>{item.price_sign}{item.price}</h3></a>
          <ColourPalette colours={colours} />
          <img src={item.image_link} />
          <figcaption>{item.description}</figcaption>
        </figure>

    )
  }

}

export default ProductDetails;
