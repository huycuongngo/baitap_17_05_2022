import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemPhone from './ItemPhone';


class DanhSachSanPham extends Component {
  // ...
  renderListPhone = () => {
    // ...
  
    return this.props.danhSachSanPham?.map((item, index) => {
      return <ItemPhone
        data={item}
        key={index}
      />
    });
  };

  render() {
    // ...

    return (
      <div className='row'>{this.renderListPhone()}</div>
    );
  }
}

let mapStateToProps = (state) => {
  // ...

  return {
    danhSachSanPham: state.sanPham.dataPhones,
  };
};

export default connect(mapStateToProps)(DanhSachSanPham);


