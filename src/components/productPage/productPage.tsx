import React from "react";
import "./styles.scss";
import { ProductsContext } from "../../contexts/productsContext";
import { useParams } from "react-router-dom";
import { addToCart, createCart } from "../../contexts/actions/cartActions";
import { CartContext, CartDispatch } from "../../contexts/cartContext";

const ProductPage = () => {
  const { products }: any = React.useContext(ProductsContext);
  const { dispatch }: any = React.useContext(CartDispatch);
  const { cart }: any = React.useContext(CartContext);

  const params = useParams();
  const product = products.find((el: any) => el.node.id === params?.id);
  const cartAddLine = async () => {
    if (!cart.id) {
      /* todo : if Cart is empty :
        create cart and store key in local storage 
        */
      console.log("Add to Cart  <<create Cart>>");
      const action = await createCart(product.node.variants.edges[0].node.id);
      dispatch(action);
      console.log("action = ", action);
    } else {
      /* todo : if Cart is there :
        add item to cart
        */
      console.log("Add to Cart  <<add to Cart>>");
      const action = await addToCart({
        variantId: product.node.variants.edges[0].node.id,
        cartId: cart.id,
      });
      dispatch(action);
    }
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container">
        <div className="grid second-nav">
          <div className="column-xs-12"></div>
        </div>
        <div className="grid product">
          <div className="column-xs-12 column-md-7">
            <div className="product-gallery">
              <ul className="image-list">
                <li className="image-item">
                  <img src={product.node.featuredImage.url} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="column-xs-12 column-md-5">
            <h1>{product.node.title}</h1>
            <h2>${product.node.variants.edges[0].node.priceV2.amount}</h2>
            <div className="description">
              <p>{product.node.description}</p>
            </div>
            <button onClick={cartAddLine} className="add-to-cart">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="grid related-products">
          <div className="column-xs-12">
            <h3>You may also like</h3>
          </div>
          <div className="products_recommandation">
            <div className="column-xs-12 column-md-4 item">
              <img src="https://source.unsplash.com/miziNqvJx5M" alt="" />
              <h4>Succulent</h4>
              <p className="price">$19.99</p>
            </div>
            <div className="column-xs-12 column-md-4 item">
              <img src="https://source.unsplash.com/2y6s0qKdGZg" alt="" />
              <h4>Terranium</h4>
              <p className="price">$19.99</p>
            </div>
            <div className="column-xs-12 column-md-4 item">
              <img src="https://source.unsplash.com/6Rs76hNbIWE" alt="" />
              <h4>Cactus</h4>
              <p className="price">$19.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
