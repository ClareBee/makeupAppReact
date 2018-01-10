import React from 'react';
import BrandList from '../components/BrandList';
import TypeOfProductList from '../components/TypeOfProductList';
import ProductDetails from '../components/ProductDetails';
import SortedByBrand from '../components/SortedByBrand';
import uniqBy from 'lodash/uniqBy';


class ProductContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      chosenProduct: null,
      chosenBrand: null
    }
    this.handleChosenProduct = this.handleChosenProduct.bind(this);
    this.handleChosenBrand = this.handleChosenBrand.bind(this);
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
      // let allbrands = uniqBy(data, 'brand');
      // console.log("unique"+ uniqueBrands);

      this.setState({products: data});
    }
  });
  request.send();
}

handleChosenProduct(index){
  this.setState({chosenProduct: index});
}
handleChosenBrand(brand){
  this.setState({chosenBrand: brand});
  console.log(this.state.chosenBrand);
}

  render(){
    // if(!this.state.products){
    //   return null
    // }
    // console.log(this.state.products.brand);
    const product = this.state.products[this.state.chosenProduct];


    return(
      <section>
        <h1>This is the product page</h1>
        <BrandList products={this.state.products} onSelect={this.handleChosenBrand} />
        <SortedByBrand products={this.state.products} brand={this.state.chosenBrand} />

        <TypeOfProductList products={this.state.products} onSelect={this.handleChosenProduct}/>
        <div className="container">
        <ProductDetails product={product} index={this.state.chosenProduct} />


      </div>
    </section>
    )
  }


}

export default ProductContainer;
