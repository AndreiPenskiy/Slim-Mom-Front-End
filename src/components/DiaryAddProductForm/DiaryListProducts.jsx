import { useState } from 'react';
import { useGetAllProductsQuery } from '../../redux/productsApi';
import {
  DiaryListProductsStyled,
  DiaryListProductsConteinerStyled,
} from './DiaryListProducts.styled';

export function DiaryListProducts({ product, setProduct }) {
  const { data: productsAll } = useGetAllProductsQuery(product);
const [open, setOpen] = useState(true)

const selectedProduct = (product) => {
  setProduct(product)
  setOpen(false)
}


  console.log('productsAll', productsAll);
  return (
    <DiaryListProductsConteinerStyled>
      {open && productsAll && (
        <DiaryListProductsStyled>
          {productsAll.map(product => (
            <li key={product._id} onClick={() => selectedProduct(product.title.ua)}>
              {product.title.ua}
            </li>
          ))}
        </DiaryListProductsStyled>
      )}
    </DiaryListProductsConteinerStyled>
  );
}
