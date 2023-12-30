import { configureStore } from '@reduxjs/toolkit';
import datalist from './dataList';
import bannerData from './bannerList';
import recomData from './recomList';
import anniverData from './anniverList';

export default configureStore({
  reducer: {
    datalist: datalist.reducer,
    bannerData: bannerData.reducer,
    recomData: recomData.reducer,
    anniverData: anniverData.reducer,
  },
});
