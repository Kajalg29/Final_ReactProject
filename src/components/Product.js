import React, { useEffect, useState } from "react";
 import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ReactImageMagnify from "react-image-magnify";
import { useParams } from "react-router";
import {useNavigate, Navigate} from "react-router-dom";
import * as Loader from "react-loader-spinner";
import "./SingleProduct.css";
import Sidebar from "./Sidebar";
function Product() {
  const { id } = useParams();
  const token=localStorage.getItem('token');
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth < 767);
  const updateMedia = () => {
    setDesktop(window.innerWidth < 767);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  let loggedIn=true;
  const navigate=useNavigate();
  if(token===null){
   loggedIn=false
  }
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const Loading = () => {
    return (<div className="center">
    <Loader.TailSpin color="#00BFFF" height={80} width={80} />
  </div>)
  };
  const ShowProduct = () => {
    if(loggedIn===false){
      return <Navigate to="/" />
    }
    return (
      <div className="container main">
        
        <div className="col-md-4">
        <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
      
      <div className="container-fluid ">
        <div className="products-container">
          <div className="row rows">
          
            <div className="col-md-8 col-sm-8 m-2">
              <div className="singlecard mb-3  card-border">
                <div className="row g-0">
                  <div className="col-md-4">
                    {
                    isDesktop ?
                    <TransformWrapper>
                      <TransformComponent>
                        <img
                          src={product.image}
                          className="img-fluid rounded-start"
                          alt="test"
                        />
                      </TransformComponent>
                    </TransformWrapper> :
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: `${product.image}`,
                          // width: 300,
                          // height: 500,
                        },
                        largeImage: {
                          src: `${product.image}`,
                          width: 1200,
                          height: 1800,
                        },
                      }}
                    />}
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <button className="btn btn-primary" data-testid="btn-category" id="categoryBtn">
                        {product.category}
                      </button>
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <h6 className="card-title">
                        ${product.price}
                        <strike>
                          ${product.price + Math.round(product.price * 0.1)}
                        </strike>
                      </h6>
                      Rating {product.rating && product.rating.rate}
                      {product.rating &&
                      product.rating.rate > 0 &&
                      product.rating.rate < 1 ? (
                        <div>
                          {" "}
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star "></span>
                          <span className="fa fa-star "></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>{" "}
                        </div>
                      ) : product.rating &&
                        product.rating.rate > 1 &&
                        product.rating.rate < 1.5 ? (
                        <div>
                          {" "}
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star "></span>
                          <span className="fa fa-star "></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>{" "}
                        </div>
                      ) : product.rating &&
                        product.rating.rate > 1.5 &&
                        product.rating.rate < 2.5 ? (
                        <div>
                          {" "}
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star "></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>{" "}
                        </div>
                      ) : product.rating &&
                        product.rating.rate > 2.5 &&
                        product.rating.rate < 3.5 ? (
                        <div>
                          {" "}
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>{" "}
                        </div>
                      ) : product.rating &&
                        product.rating.rate > 3.5 &&
                        product.rating.rate < 4.5 ? (
                        <div>
                          {" "}
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>{" "}
                        </div>
                      ) : (
                        <div>
                          {" "}
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <button className="btn btn-secondary m-2" onClick={()=>navigate('/products')} style={{width:"20%"}}>Back</button>
       </div>
     
       </div>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
}

export default Product;
