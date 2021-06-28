import React, { Component } from 'react';

class PriceList extends Component {
    constructor(props) {
        super(props);
        
    }
  

    render() {
        return (
       

              
						<div class="row border-dot no-gutters clss1">
							<div class="col-8 menu-item-name">
								<h6>{this.props.tieuDe1}</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>{this.props.gia}</h6>
							</div>
						</div>
				

     
                
        );
    }
}

export default PriceList;