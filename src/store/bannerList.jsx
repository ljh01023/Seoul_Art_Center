import { createSlice } from '@reduxjs/toolkit';

let bannerList = [
  {
    id: '1',
    category: '뮤지컬',
    title: '스쿨 오브 락',
    startDate: '2024-01-12',
    endDate: '2024-03-24',
    place: '오페라극장',
    image: 'image1.jpg',
    count: '47',
  },
  {
    id: '2',
    category: '발레',
    title: '백조의 호수',
    startDate: '2023-06-09',
    endDate: '2023-06-11',
    place: '오페라극장',
    image: 'image2.jpg',
    count: '150',
  },
  {
    id: '3',
    category: '오페라',
    title: '투란도트',
    startDate: '2023-08-15',
    endDate: '2023-08-20',
    place: '오페라극장',
    image: 'image3.jpg',
    anniversary: '기획',
    count: '115',
  },
  {
    id: '4',
    category: '오페라',
    title: '서부의 아가씨',
    startDate: '2024-12-05',
    endDate: '2024-12-08',
    place: '오페라극장',
    image: 'image4.jpg',
    count: '53',
  },
  {
    id: '5',
    category: '뮤지컬',
    title: '일 테노레 (IL TENORE)',
    startDate: '2023-12-19',
    endDate: '2024-02-25',
    place: 'CJ 토월극장',
    image: 'image5.jpg',
    count: '29',
  },
];

let bannerData = createSlice({
  name: 'bannerData',
  initialState: bannerList,
});

export default bannerData;
