import { dataPhones } from '../../dataPhones';
import { THEM_SAN_PHAM, XEM_CHI_TIET } from '../constants/sanPham';

let initialState = {
  dataPhones: dataPhones,
  chiTietSanPham: dataPhones[0],
  gioHang: [],
}

export const sanPhamReducer = (state = initialState, { type, payload }) => {
  // ...
  switch (type) {
    case THEM_SAN_PHAM: {
      let cloneGioHang = [...state.gioHang];
      let index = state.gioHang.findIndex((item) => {
        return item.maSP === payload.maSP;
      });
      if (index == -1) {
        let spGioHang = { ...payload, soLuong: 1 };
        cloneGioHang.push(spGioHang);
      } else {
        cloneGioHang[index].soLuong++;
      }
      state.gioHang = cloneGioHang;
      return { ...state };
    }
    case XEM_CHI_TIET: { 
      state.chiTietSanPham = payload;
      return { ...state };
    }
    default:
      return state;
  };
};
