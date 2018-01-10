import React from 'react';
import BrandList from '../components/BrandList';
import TypeOfProductList from '../components/TypeOfProductList';
import ProductDetails from '../components/ProductDetails';
import SortedByBrand from '../components/SortedByBrand';
import SortedByCost from '../components/SortedByCost';
import CostOfProductList from '../components/CostOfProductList';
import uniqBy from 'lodash/uniqBy';
import Tab from 'react-bootstrap/lib/Tab';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';


class ProductContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      chosenProduct: null,
      chosenBrand: null,
      chosenPrice: null
    }
    this.handleChosenProduct = this.handleChosenProduct.bind(this);
    this.handleChosenBrand = this.handleChosenBrand.bind(this);
    this.handleChosenPrice = this.handleChosenPrice.bind(this);
  }

  componentDidMount(){
  const url = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick";
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

handleChosenProduct(index){
  this.setState({chosenProduct: index});
}
handleChosenBrand(brand){
  this.setState({chosenBrand: brand});
  console.log(this.state.chosenBrand);
}
handleChosenPrice(price){
  this.setState({chosenPrice: price});
}

  render(){
    // if(!this.state.products){
    //   return null
    // }
    // console.log(this.state.products.brand);
    const product = this.state.products[this.state.chosenProduct];
    return(
      <section>
        <Jumbotron className="title">
        <h1 id="title-text">lipstix</h1>
      </Jumbotron>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={4}>
              <Nav id="menu" bsStyle="pills" stacked>
                <NavItem eventKey="first">
                  <p>Brands</p>
                </NavItem>
                <NavItem eventKey="second">
                  <p>Individual Products</p>
                </NavItem>
                <NavItem eventKey="third">
                  <p>Find a Bargain!</p>
                </NavItem>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>
                <Tab.Pane className="tabs" eventKey="first">
                  <BrandList products={this.state.products} onSelect={this.handleChosenBrand} />
                  <SortedByBrand products={this.state.products} brand={this.state.chosenBrand} />
                </Tab.Pane>
                <Tab.Pane className="tabs" eventKey="second">
                  <TypeOfProductList products={this.state.products} onSelect={this.handleChosenProduct}/>
                  <ProductDetails product={product} index={this.state.chosenProduct} />
                </Tab.Pane>
                <Tab.Pane className="tabs" eventKey="third">
                  <CostOfProductList products={this.state.products} onSelect={this.handleChosenPrice} />
                  <SortedByCost products={this.state.products} price={this.state.chosenPrice} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>



    </section>
    )
  }


}

export default ProductContainer;
