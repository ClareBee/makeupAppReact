import React from 'react';
import uniqBy from 'lodash/uniqBy';
// import map from 'lodash';


class BrandList extends React.Component {

  render(){
    // var uniqueBrands = [];
    // this.props.products.map((product) => {
    //   console.log(product.brand);
    //   if(!uniqueBrands.includes(product.brand)){
    //     uniqueBrands.push(product);
    //   }
    //   return uniqueBrands;
    // });
    var uniqueBrands = uniqBy(this.props.products, 'brand');
    // console.log("unique"+ uniqueBrands);
    var makes = uniqueBrands.map((make) => {
      return <option>{make.brand}</option>
    });
    // console.log(uniqueBrands);

    return(
    <div>
      <h1>This is the brandlist</h1>

      <select>
        {makes}
      </select>
    </div>
    )
  }

}

export default BrandList;
