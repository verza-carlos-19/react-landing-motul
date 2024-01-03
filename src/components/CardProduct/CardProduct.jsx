import {
  BoxCard,
  ButtonCard,
  ImageBoxCard,
  PriceCard,
  TitleCard,
} from "./cardProductStyles";

function CardProduct({ title, image, price }) {
  const formatPrice = price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
  return (
    <>
      <BoxCard>
        <TitleCard>{title}</TitleCard>
        <ImageBoxCard>
          <img src={image} alt={title} />
        </ImageBoxCard>
        <PriceCard>{formatPrice}</PriceCard>
        <ButtonCard>COMPRAR</ButtonCard>
      </BoxCard>
    </>
  );
}

export default CardProduct;
