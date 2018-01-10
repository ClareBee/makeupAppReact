import React from 'react';

class CostOfProductList extends React.Component {
  constructor(props){
    super(props);
    this.handleChosenPrice = this.handleChosenPrice.bind(this);
  }

  handleChosenPrice(event){
    this.props.onSelect(parseInt(this.refs.input.value), 10);
    console.log(event.target.value);
  }
  render(){
    return(
      <div>
      <p> This is the sorted by cost bit </p>
      <label for="slider" type="range">min=0, max=50, ticks at $5, $10, $15, $20, $25, $30, $35, $40, $45, $50:</label>
      <input id="slider" list="ticks" type="range" min="0" max="50" step="5" ref="input"/>
      <datalist id="ticks">
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
        <option>35</option>
        <option>40</option>
        <option>45</option>
        <option>50</option>

      </datalist>
      <button onClick={this.handleChosenPrice}>Choose your max price</button>
      </div>
    )
  }
}

export default CostOfProductList;
