import { productsData } from "../../data/products.js";
import CardProduct from "../cardProduct/cardProduct";
import {
  ProductsContiner,
  ProductsGallery,
  Title,
} from "./containerProdsStyles";

function ContainerProds() {
  return (
    <>
      <ProductsContiner>
        <Title>Productos</Title>
        <ProductsGallery>
          {productsData.map((element) => {
            return (
              <CardProduct
                title={element.name}
                image={element.img}
                price={element.price}
              />
            );
          })}
        </ProductsGallery>
      </ProductsContiner>
    </>
  );
}

export default ContainerProds;
