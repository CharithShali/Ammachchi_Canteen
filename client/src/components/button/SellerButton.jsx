import React, { Component } from "react";

class SellerButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recordForEdit: props.recordForEdit,
      Active: props.Active,
      onClick: props.onClick,
    }

    this.setActive = this.setActive.bind(this);
  }

  setActive(){
    this.setState({
      Active: !this.state.Active,
    })
}

  render() {

  return (
    <button 
      style={{
        backgroundColor: this.state.Active ? 'green' : 'salmon',
        color: this.state.Active ? 'white' : '',
        border: 'none',
        borderRadius: '10px',
        overflow: 'hidden',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
        }}
      onClick={this.state.onClick}
      type="submit"
    >
      {this.state.Active ? 'Available' : 'Not Available'}
    </button>
  );
  }
};

export default SellerButton;