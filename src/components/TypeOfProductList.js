import React from 'react';


class TypeOfProductList extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSelect(parseInt(event.target.value, 10));
  }
  render(){
    const items = this.props.products.map((product, index) => {
    return <option value={index} key={index}>{product.name}</option>
  });
    return(
      <div>
      <h2>This is the type of product list</h2>
      <select id="items" onChange={this.handleChange}>
        {items}
      </select>
    </div>
    )
  }
}

export default TypeOfProductList;
