import React, { Component } from 'react';
import { dataPhones } from './dataPhones';
import DanhSachSanPham from './DanhSachSanPham';
import SanPhamChiTiet from './SanPhamChiTiet';
import ModalGioHang from './ModalGioHang';


export default class BaiTapGioHang extends Component {
  // ...
  state = {
    dataPhones: dataPhones,
    chiTietSanPham: dataPhones[0],
    gioHang: [],
  };

  handleSanPhamChiTiet = (sp) => {
    this.setState({
      chiTietSanPham: sp
    });
  };

  handleThemSanPham = (sp) => {
    // ...
    let cloneGioHang = [...this.state.gioHang];

    let index = this.state.gioHang.findIndex((item) => {
      return item.maSP == sp.maSP
    })

    console.log({ index });

    if (index == -1) {
      // cú pháp es6
      let spGioHang = { ...sp, soLuong: 1 };
      cloneGioHang.push(spGioHang);
    } else {
      cloneGioHang[index].soLuong++;
    }

    this.setState({
      gioHang: cloneGioHang
    }, () => {
      console.log(this.state.gioHang);
    })

    // return()
  }

  handleThayDoiSoLuong = (idSp, giaTri) => {
    // ...
    console.log(idSp);
    let index = this.state.gioHang.findIndex((item) => {
      return item.maSP === idSp;
    })

    let cloneGioHang = [...this.state.gioHang];

    if (index !== -1) {
      cloneGioHang[index].soLuong = cloneGioHang[index].soLuong + giaTri;

      // if (cloneGioHang[index].soLuong === 0) {
      //   cloneGioHang.splice(index, 1);
      // }
      cloneGioHang[index].soLuong === 0 && cloneGioHang.splice(index, 1);
    }

    this.setState({
      gioHang: cloneGioHang
    })
    // return()
  }
  
  render() {
    // ...

    return (
      <div>
        <ModalGioHang
          handleThayDoiSoLuong={this.handleThayDoiSoLuong}
          gioHang={this.state.gioHang}
        />

        <DanhSachSanPham />

        <SanPhamChiTiet />
      </div>
    )
  }
}
