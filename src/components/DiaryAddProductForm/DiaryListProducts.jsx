import { useGetAllProductsQuery } from '../../redux/productsApi';
import {
  DiaryListProductsStyled,
  DiaryListProductsConteinerStyled,
} from './DiaryListProducts.styled';

export function DiaryListProducts({ product }) {
  const { data: productsAll } = useGetAllProductsQuery(product);

  console.log('productsAll', productsAll);
  return (
    <DiaryListProductsConteinerStyled>
      <DiaryListProductsStyled>
        {productsAll &&
          productsAll.map(product => (
            <li key={product._id}>{product.title.ua}</li>
          ))}
      </DiaryListProductsStyled>
    </DiaryListProductsConteinerStyled>
  );
}
