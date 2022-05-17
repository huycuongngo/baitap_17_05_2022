import React, { Component } from 'react';
import { connect } from 'react-redux';

class SanPhamChiTiet extends Component {
  // ...
  
  render() {
    // ...
    let { hinhAnh, manHinh, heDieuHanh, giaBan } = this.props.sanPhamChiTiet;

    return (
      <div className='row mt-5'>
        <img src={hinhAnh} className="col-5" alt="" />
        <div className='col-7'>
          <table className='table'>
            <tr>
              <td>Man Hinh</td>
              <td>{manHinh}</td>
            </tr>
            <tr>
              <td>He Dieu Hanh</td>
              <td>{heDieuHanh}</td>
            </tr>
            <tr>
              <td>Gia Ban</td>
              <td>{giaBan}</td>
            </tr>
          </table>
        </div>  
      </div>
    );
  };
};

let mapStateToProps = (state) => {
  // ...

  return {
    sanPhamChiTiet: state.sanPham.chiTietSanPham,
  }
};

export default connect(mapStateToProps)(SanPhamChiTiet);