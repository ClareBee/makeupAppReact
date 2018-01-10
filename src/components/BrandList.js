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
      <h1>This is the brandlist</h1>

      <select onChange={this.handleChosenBrand}>
        {makes}
      </select>
    </div>
    )
  }

}

export default BrandList;
