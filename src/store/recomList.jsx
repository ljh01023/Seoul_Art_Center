import { createSlice } from '@reduxjs/toolkit';

let recomList = [
  {
    id: '23',
    category: '연주회',
    title: '오페라 클라이맥스 2024',
    startDate: '2024-02-25',
    endDate: '2024-02-25',
    place: '콘서트홀',
    image: 'image23.jpg',
  },
  {
    id: '1',
    category: '뮤지컬',
    title: '스쿨 오브 락',
    startDate: '2024-01-12',
    endDate: '2024-03-24',
    place: '오페라극장',
    image: 'image1.jpg',
  },
  {
    id: '3',
    category: '오페라',
    title: '투란도트',
    startDate: '2023-08-15',
    endDate: '2023-08-20',
    place: '오페라극장',
    image: 'image3.jpg',
  },
  {
    id: '2',
    category: '발레',
    title: '백조의 호수',
    startDate: '2023-06-09',
    endDate: '2023-06-11',
    place: '오페라극장',
    image: 'image2.jpg',
  },
  {
    id: '9',
    category: '전시',
    title: '에드바르드 뭉크',
    startDate: '2024-05-22',
    endDate: '2024-09-19',
    place: '한가람미술관 제1전시실',
    image: 'image9.jpg',
  },
];

let recomData = createSlice({
  name: 'recomData',
  initialState: recomList,
});
export default recomData;
