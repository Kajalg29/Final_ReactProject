// import axios from "axios";
// import React, { Component } from "react";
// import { Link, Navigate, NavLink } from "react-router-dom";
// import "./ProductList.css";
// import * as Loader from "react-loader-spinner";
// import ReactPaginate from 'react-paginate';
// export class ProductList extends Component {
//   constructor(props){
//     super(props);
//     const token=localStorage.getItem('token');
//     let loggedIn=true;
//     //console.log(token)
//     if(token===null){
//       loggedIn=false
//     }
//     this.state={
//       products: [],
//       loading:false,
//       loggedIn
//     }
//   }
//   // state = {
//   //   products: [],
//   // };

//   componentDidMount() {
//     this.setState({loading:true})
//     axios.get("https://fakestoreapi.com/products?limit=6").then((res) => {
//       this.setState({loading:false})
//       const products = res.data;
     
//       this.setState({ products });
//     });
//   }

//   render() {
//     if(this.state.loggedIn===false){
//       return <Navigate to="/" />
//     }
//     return (
//       this.state.loading ? <div className="jumbotron d-flex justify-content-center vertical-center"><Loader.TailSpin color="#00BFFF"  height={80} width={80} /> </div>: 
//       <> 
     
//       <div className="container-fluid main">
//         <div className="products">
//           <div className="p-2 header">
//             <strong>List Products</strong>
//             <span className="text-primary">
//               show Item per page{" "}
//               <select>
//                 <option>2</option>
//                 <option>4</option>
//               </select>
//             </span>
//           </div>
//           <hr />

//           <div className="row rows">
//             {/* <div className="col-md-2 m-2" style={{backgroundColor:"white"}}>sidebar</div> */}
//             {this.state.products.map((product) => (
//               <div className="col-md-4 col-sm-10 m-2" key={product.id}>
//                 <div className="card mb-3 cards card-border">
//                   <div className="row rows g-0">
//                     <div className="col-md-4">
//                       <img
//                         src={product.image}
//                         className="img-fluid rounded-start"
//                         alt="..."
//                       />
//                     </div>
//                     <div className="col-md-8">
//                       <div className="card-body">
//                         <button className="btn btn-primary" data-testid="btn-cat" id="CatBtn">
//                           {product.category}
//                         </button>
//                         <h3>
//                           <Link
//                             to={`/products/${product.id}`}
//                             className="card-title text-link"
//                           >
//                             {product.title}
//                           </Link>
//                         </h3>
//                         <p className="card-text">{product.description.substring(0,200)}</p>
//                         <h6 className="card-title">
//                           ${product.price}
//                           <strike>
//                             ${product.price + Math.round(product.price * 0.1)}
//                           </strike>
//                         </h6>
//                         {product.rating.rate}
//                         {product.rating.rate > 0 && product.rating.rate < 1 ? (
//                           <div>
//                             {" "}
//                             <span className="fa fa-star"></span>
//                             <span className="fa fa-star "></span>
//                             <span className="fa fa-star "></span>
//                             <span className="fa fa-star"></span>
//                             <span className="fa fa-star"></span>{" "}
//                           </div>
//                         ) : product.rating.rate > 1 &&
//                           product.rating.rate < 1.5 ? (
//                           <div>
//                             {" "}
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star "></span>
//                             <span className="fa fa-star "></span>
//                             <span className="fa fa-star"></span>
//                             <span className="fa fa-star"></span>{" "}
//                           </div>
//                         ) : product.rating.rate > 1.5 &&
//                           product.rating.rate < 2.5 ? (
//                           <div>
//                             {" "}
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star "></span>
//                             <span className="fa fa-star"></span>
//                             <span className="fa fa-star"></span>{" "}
//                           </div>
//                         ) : product.rating.rate > 2.5 &&
//                           product.rating.rate < 3.5 ? (
//                           <div>
//                             {" "}
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star"></span>
//                             <span className="fa fa-star"></span>{" "}
//                           </div>
//                         ) : product.rating.rate > 3.5 &&
//                           product.rating.rate < 4.5 ? (
//                           <div>
//                             {" "}
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star"></span>{" "}
//                           </div>
//                         ) : (
//                           <div>
//                             {" "}
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star checked"></span>
//                             <span className="fa fa-star checked"></span>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="container pagi">
//       <div className="row">
//         <div className="col-sm-12">
//           <nav aria-label="Page navigation example">
//             <ul className="pagination">
//               <li className="page-item">
//                 <a className="page-link" href="#" aria-label="Previous">
//                   <span aria-hidden="true">&laquo;</span>
//                   <span className="sr-only">Previous</span>
//                 </a>
//               </li>
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   1
//                 </a>
//               </li>
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   2
//                 </a>
//               </li>
//               <li className="page-item">
//                 <a className="page-link" href="#">
//                   3
//                 </a>
//               </li>
//               <li className="page-item">
//                 <a className="page-link" href="#" aria-label="Next">
//                   <span aria-hidden="true">&raquo;</span>
//                   <span className="sr-only">Next</span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         </div>
//       </div>
//       </>
//     );
//   }
// }

// export default ProductList;

import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "./ProductList.css";
import * as Loader from "react-loader-spinner";
import ReactPaginate from 'react-paginate';
import Sidebar from "./Sidebar";
export class ProductList extends Component {
  constructor(props){
    super(props);
    const token=localStorage.getItem('token');
    let loggedIn=true;
    //console.log(token)
    if(token===null){
      loggedIn=false
    }
    this.state={
      products: [],
      loading:false,
      offset: 0,
      perPage: 4,
      currentPage: 0,
      loggedIn
    }
   // this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handlePageClick = this
        .handlePageClick
        .bind(this);
  }
 
  // state = {
  //   products: [],
  // };
  receivedData() {
    this.setState({loading:true})
    axios.get("https://fakestoreapi.com/products?limit=5").then((res) => {
      this.setState({loading:false})
      const products = res.data;
      const slice = products.slice(this.state.offset, this.state.offset + this.state.perPage)
      const postData = ( <> 
     <div className="container main-sid">
         <Sidebar></Sidebar>
        <div className="container-fluid main">
          <div className="products">
            <div className="p-2 header">
              <strong>List Products</strong>
              <span className="text-primary">
                show Item per page{" "}
                <select onChange={this.handleDropdownChange}>
               
                  <option value='4'>4</option>
                </select>
              </span>
            </div>
            <hr />
  
            <div className="row rows">
              {slice.map(product =>
                <div className="col-md-4 col-sm-10 m-2" key={product.id}>
                  <div className="card mb-3 cards card-border">
                    <div className="row rows g-0">
                      <div className="col-md-4">
                        <img
                          src={product.image}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <button className="btn btn-primary" data-testid="btn-cat" id="CatBtn">
                            {product.category}
                          </button>
                          <h3>
                            <Link
                              to={`/products/${product.id}`}
                              className="card-title text-link"
                            >
                              {product.title}
                            </Link>
                          </h3>
                          <p className="card-text">{product.description.substring(0,200)}</p>
                          <h6 className="card-title">
                            ${product.price}
                            <strike>
                              ${product.price + Math.round(product.price * 0.10)}
                            </strike>
                          </h6>
                          {product.rating.rate}
                          {product.rating.rate > 0 && product.rating.rate < 1 ? (
                            <div>
                              {" "}
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star "></span>
                              <span className="fa fa-star "></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>{" "}
                            </div>
                          ) : product.rating.rate > 1 &&
                            product.rating.rate < 1.5 ? (
                            <div>
                              {" "}
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star "></span>
                              <span className="fa fa-star "></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>{" "}
                            </div>
                          ) : product.rating.rate > 1.5 &&
                            product.rating.rate < 2.5 ? (
                            <div>
                              {" "}
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star "></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>{" "}
                            </div>
                          ) : product.rating.rate > 2.5 &&
                            product.rating.rate < 3.5 ? (
                            <div>
                              {" "}
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>{" "}
                            </div>
                          ) : product.rating.rate > 3.5 &&
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
              )}
            </div>
          </div>
        </div>
        </div>
        </>)
         this.setState({
            pageCount: Math.ceil(products.length / this.state.perPage),
           
            postData
        })
      this.setState({ products });
    });
  }
  componentDidMount() {
  this.receivedData();
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });

};
// handleDropdownChange(e) {
//      this.setState({ perPage: e.target.value });
//   }
  render() {
    if(this.state.loggedIn===false){
      return <Navigate to="/" />
    }
    return (
     
     <>
     { this.state.loading ? <div className="jumbotron d-flex justify-content-center vertical-center"><Loader.TailSpin color="#00BFFF"  height={80} width={80} /> </div>: ''}
       {this.state.postData}
       <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
    </>
    );
  }
}

export default ProductList;
