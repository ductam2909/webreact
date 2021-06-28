import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PriceList from './PriceList';
import dl from './data.json';
class Home extends  Component{
    render(){
        return(
            <div>
                
// {/* <!-- //header -->
// <!-- banner --> */}
<div class="banner_w3lspvt" id="home">
	<div class="csslider infinity" id="slider1">
		<input type="radio" name="slides" checked="checked" id="slides_1"/>
		<input type="radio" name="slides" id="slides_2"/>
		<input type="radio" name="slides" id="slides_3"/>
		<input type="radio" name="slides" id="slides_4"/>

		<ul class="banner_slide_bg">
			<li>
				<div class="slider-info bg1">
					<div class="bs-slider-overlay">
						<div class="banner-text">
							<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Chào mừng quý khách đến với nhà hàng TBT</h2>
								<p>Món Ngon Mỗi Ngày Với TBT. Hàng Trăm Món Ăn Hàng Ngày Hấp Dẫn, Mới Lạ, Độc Đáo Thơm Nức Mũi Cả Nhà Cùng Mê. Hãy cùng TBT khám phá và tạo ra những món ăn tuyệt vời cho gia đình bạn. Đã Nấu Là Ngon Đúng Điệu. Món Ăn Ngon Đúng Điệu.</p>
								
								<Link to='/product' class="btn">Start with menu</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg2">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
						<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Chào mừng quý khách đến với nhà hàng TBT</h2>
								<p>Món Ngon Mỗi Ngày Với TBT. Hàng Trăm Món Ăn Hàng Ngày Hấp Dẫn, Mới Lạ, Độc Đáo Thơm Nức Mũi Cả Nhà Cùng Mê. Hãy cùng TBT khám phá và tạo ra những món ăn tuyệt vời cho gia đình bạn. Đã Nấu Là Ngon Đúng Điệu. Món Ăn Ngon Đúng Điệu.</p>
								
								<Link to='/product' class="btn">Start with menu</Link>
							</div>
							</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg3">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Chào mừng quý khách đến với nhà hàng TBT</h2>
								<p>Món Ngon Mỗi Ngày Với TBT. Hàng Trăm Món Ăn Hàng Ngày Hấp Dẫn, Mới Lạ, Độc Đáo Thơm Nức Mũi Cả Nhà Cùng Mê. Hãy cùng TBT khám phá và tạo ra những món ăn tuyệt vời cho gia đình bạn. Đã Nấu Là Ngon Đúng Điệu. Món Ăn Ngon Đúng Điệu.</p>
								
								<Link to='/product' class="btn">Start with menu</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg4">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Chào mừng quý khách đến với nhà hàng TBT</h2>
								<p>Món Ngon Mỗi Ngày Với TBT. Hàng Trăm Món Ăn Hàng Ngày Hấp Dẫn, Mới Lạ, Độc Đáo Thơm Nức Mũi Cả Nhà Cùng Mê. Hãy cùng TBT khám phá và tạo ra những món ăn tuyệt vời cho gia đình bạn. Đã Nấu Là Ngon Đúng Điệu. Món Ăn Ngon Đúng Điệu.</p>
								
								<Link to='/product' class="btn">Start with menu</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="navigation"> 
			<div>
			  <label for="slides_1"></label>
			  <label for="slides_2"></label>
			  <label for="slides_3"></label>
			  <label for="slides_4"></label>
			</div>
		</div>
	</div>
</div>

<section class="subscribe" id="subscribe">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
				<div class="news-icon mr-3">
					<span class="fa fa-paper-plane" aria-hidden="true"></span>
				</div>
				<div class="text">
					<h3>Món ngon mỗi ngày</h3>
				</div>
			</div>
			<div class="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
				<form action="#" method="post">
					<input type="email" name="email" placeholder="Enter your email here" required="" />
					<button class="btn1"><span class="fa fa-paper-plane" aria-hidden="true"></span></button>
				</form>
				<p>Phản hồi</p>
			</div>
		</div>
	</div>
</section>
// {/* <!-- //subscribe -->
// <!-- footer --> */}
    
    </div>
        )
    }
}
export default Home