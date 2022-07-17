import { productsData } from 'components/helpers/productsData';
import { useGetAllProductsQuery } from '../../redux/productsApi';

export function DiaryListProducts() {
  const { data: productsAll } = useGetAllProductsQuery();

  console.log('productsAll', productsAll);
  return (
    <ul>
      {productsData.map(product => (
        <li key={product.products}>{product.products}</li>
      ))}
    </ul>
  );
}
