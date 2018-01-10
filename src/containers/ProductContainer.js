import React from 'react';
import BrandList from '../components/BrandList';
import TypeOfProductList from '../components/TypeOfProductList';
import ProductDetails from '../components/ProductDetails';


class ProductContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount(){
  const url = "https://makeup-api.herokuapp.com/api/v1/products.json";
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", () => {
    if(request.status !== 200){
      console.log("unsuccessful");
    } else {
      const response = request.responseText;
      const data = JSON.parse(response);
      this.setState({products: data});
    }
  });
  request.send();
}
  render(){
    if(!this.state.products){
      return null
    }
    console.log(this.state.products);
    return(
      <div>
        <h1>This is the product page</h1>
        <BrandList />
        <TypeOfProductList />
        <ProductDetails />
      </div>
    )
  }


}

export default ProductContainer;
