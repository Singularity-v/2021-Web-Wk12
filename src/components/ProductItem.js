import {useContext} from "react";
import {Card}from "antd"
import { Link } from 'react-router-dom';
import { StoreContext } from "../store";
import { setProductDetail } from "../action";

export default function ProductItem( { product }) {
    const { dispatch } = useContext(StoreContext);
    return (
        <Card className="home-product">
            <Link to={`/products/${product.category}/${product.id}`}
                onClick={() =>{
                    setProductDetail(dispatch,product.id,1);
                }}>
                <img 
                    className="product-pic"
                    src={product.image}
                    alt={product.alt} />
            </Link>
            <div className="product-info">
            <h6 >
                    {product.category}
                </h6>
                <h5>
                    {product.name}
                </h5>
                <p >
                    {product.author}
                </p>
            </div>
        </Card>
    );
}