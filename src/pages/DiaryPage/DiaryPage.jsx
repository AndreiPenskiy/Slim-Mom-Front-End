import { DiaryPageConteiner } from './DiaryPage.styled';
import DiaryDateСalendar from 'components/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList';

export default function DiaryPage() {
  return (
    <DiaryPageConteiner>
      <DiaryDateСalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </DiaryPageConteiner>
  );
}
