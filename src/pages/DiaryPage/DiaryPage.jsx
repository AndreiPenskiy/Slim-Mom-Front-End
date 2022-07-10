import { DiaryPageConteiner } from './DiaryPage.styled';
import DiaryDateСalendar from 'components/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList';
import { useState } from 'react';

export default function DiaryPage() {
  // const [filter, setFilter] = useState('');
  // const handlerFilterName = e => {
  //   setFilter(e.target.value);
  // };

  return (
    <DiaryPageConteiner>
      <DiaryDateСalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </DiaryPageConteiner>
  );
}
