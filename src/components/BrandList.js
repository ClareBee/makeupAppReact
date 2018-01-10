import React from 'react';
import uniqBy from 'lodash/uniqBy';
// import map from 'lodash';


class BrandList extends React.Component {
  constructor(props){
    super(props);
    this.handleChosenBrand = this.handleChosenBrand.bind(this);
  }

  handleChosenBrand(event){
    this.props.onSelect(event.target.value);
    console.log(event.target.value);
  }

  render(){
    var uniqueBrands = uniqBy(this.props.products, 'brand');
    var makes = uniqueBrands.map((make) => {
      return <option value={make.brand}>{make.brand}</option>
    });

    return(
    <div>
      <h1>Brand List</h1>
      <h4>Choose a brand to see what items we have and click to visit the product webpage.</h4>
      <select className="selector" onChange={this.handleChosenBrand}>
        {makes}
      </select>
    </div>
    )
  }

}

export default BrandList;
