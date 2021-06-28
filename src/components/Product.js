import React,{Component} from 'react';
import NewIteam from './NewIteam';
import dl from './data.json';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
 class Product extends Component{
    //  console.log(data);
    
    constructor(props) {
        super(props);
        this.state = {
          activePage: 15
        };
      }
     
      handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
      


     
     render(){
     
        //  console.log(dl.map((value,key) =>(
            //  <NewIteam key={key}></NewIteam>
        //  )
        //  ));
        
         return(
            <div>
            <section class="inner-page-banner" id="home">
            </section>
            
            
            
            <div class="breadcrumb-agile">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Product</li>
                </ol>
            </div>
            
            
            <section class="what-we-do py-5">
            <h3 class="heading text-center mb-3 mb-sm-5">-- Hải sản --</h3>
            
                <div className="container">
                <div className="row mt-4">

           
          {

              dl.map((value,key) => {
                  return (
                    <NewIteam key={key}  
                    tinId={value.id}
                    anh1={value.anh1} 
                    tieuDe1={value.tieuDe}
                    trichDan={value.trichDan}> </NewIteam>
                  )
              }) 
          }

    </div>  
   

    <div >
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={150}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    <div class="pagination">
   <a href="#">«</a>
   <a href="#">1</a>
   <a class="active" href="#">2</a>
   <a href="#">3</a>
   <a href="#">4</a>
   <a href="#">5</a>
   <a href="#">6</a>
   <a href="#">»</a>
 </div>

 
  </div>
  
                
            </section>





            
                <section class="testimonials py-5" id="testimonials">
                    <div class="container py-md-5">
                           <h3 class="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
                        <div class="row mt-3">
            
                            <div class="col-md-4 test-grid text-left px-lg-3">
                                <div class="test-info">
            
                                    <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                    <h3 class="mt-md-4 mt-3"> Abraham Smith</h3>
            
                                    <div class="test-img text-center mb-3">
                                        <img src="assets/images/test1.jpg" class="img-fluid" alt="user-image" />
                                    </div>
                                    <div class="mobl-footer test-soc text-center">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#">
                                        <span class="fa fa-facebook-f"></span>
                                    </a>
                                            </li>
                                            <li class="mx-1">
                                                <a href="#">
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                            </li>
            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                                <div class="test-info">
            
                                    <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                    <h3 class="mt-md-4 mt-3"> Mariana Noe</h3>
                                    <div class="test-img text-center mb-3">
                                        <img src="assets/images/test2.jpg" class="img-fluid" alt="user-image" />
                                    </div>
                                    <div class="mobl-footer test-soc text-center">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#">
                                        <span class="fa fa-facebook-f"></span>
                                    </a>
                                            </li>
                                            <li class="mx-1">
                                                <a href="#">
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                            </li>
            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 test-grid text-left px-lg-3">
                                <div class="test-info">
            
                                    <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                    <h3 class="mt-md-4 mt-3">Nebula Nairobi</h3>
            
                                    <div class="test-img text-center mb-3">
                                        <img src="assets/images/test3.jpg" class="img-fluid" alt="user-image" />
                                    </div>
                                    <div class="mobl-footer test-soc text-center">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#">
                                        <span class="fa fa-facebook-f"></span>
                                    </a>
                                            </li>
                                            <li class="mx-1">
                                                <a href="#">
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                            </li>
            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
            
            
                    </div>
                </section>
                </div>
         )
     }
 }
 ReactDOM.render(<Product />, document.getElementById("root"));

 export default Product