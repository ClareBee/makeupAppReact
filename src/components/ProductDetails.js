import React from 'react';
class ProductDetails extends React.Component {


  render(){
    if(!this.props.product){
      return null;
    }
    var item = this.props.product;
    console.log(item);


    item.product_colors.length;

    return(
      <article className="item">
      <figure>

      <h2>{item.name}</h2>
      <h2>{item.brand}</h2>
      <a className="price-link" href={item.product_link} target="_blank"><i class="fa fa-shopping-basket fa-5x" aria-hidden="true"></i><h3>{item.price_sign}{item.price}</h3></a>
        <div id="colors">
          <input disabled title={item.product_colors[0]['colour_name']} type="color" id="color-picker" value={item.product_colors[0]['hex_value']}/>
          <input disabled type="color" id="color-picker" value={item.product_colors[1]['hex_value']}/>
        </div>
      <img src={item.image_link} />
      <figcaption>{item.description}</figcaption>
      </figure>
    </article>
    )
  }

}

export default ProductDetails;
