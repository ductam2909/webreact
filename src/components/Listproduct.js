import React, { Component } from 'react';

class Listproduct extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal1"><img src={this.props.anh1} alt="aegis" class="img-fluid mt-4" /></a>
                        <h4 className="card-title">{this.props.tieuDe1}</h4>
            </div>

            
        );
    }
}

export default Listproduct;