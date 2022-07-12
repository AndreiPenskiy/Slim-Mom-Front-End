import { DiaryPageConteiner } from './DiaryPage.styled';
import DiaryDateСalendar from 'components/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList';
import { RightSideBar } from '../../components/RightSideBar/RightSideBar';

export default function DiaryPage() {
  return (
    <div>
      <DiaryPageConteiner>
        <DiaryDateСalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
      </DiaryPageConteiner>
      <RightSideBar />
    </div>
  );
}
