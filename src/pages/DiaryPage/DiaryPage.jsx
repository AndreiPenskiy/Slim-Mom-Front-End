import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { DiaryPageConteiner } from './DiaryPage.styled';
import DiaryDateСalendar from 'components/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList';
import { RightSideBar } from '../../components/RightSideBar/RightSideBar';
import { StyledLink } from 'components/UserInfo/UserInfo.styled';
import { getLoggedIn } from 'redux/auth/auth-selectors';

export default function DiaryPage() {
  const isLoggedIn = useSelector(getLoggedIn);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isLoggedIn && isMobile && (
        <StyledLink to="/calculator">
          <MdOutlineKeyboardReturn size={20} />
        </StyledLink>
      )}
      <DiaryPageConteiner>
        <DiaryDateСalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
      </DiaryPageConteiner>
      <RightSideBar />
    </div>
  );
}
