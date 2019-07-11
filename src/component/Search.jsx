import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBRow, MDBCol, MDBFormInline, MDBBtn, MDBNavbarToggler, MDBNavbar, MDBCollapse, MDBNavbarNav, MDBContainer } from
"mdbreact";

class Search extends Component {
state = {
  collapsed: false
}



handleTogglerClick = () => {
  this.setState({
    collapsed: !this.state.collapsed
  });
}

handleNavbarClick = () => {
  this.setState({
    collapsed: false
  });
}

render() {
  return (
    <MDBContainer>
      <h1>Rechercher</h1><hr/>
      <MDBCol md="12">
        <MDBNavbar color="deep-purple" className="text-white darken-3" dark expand="md">
          
          <MDBNavbarToggler onClick={this.handleTogglerClick} />
          <Router>
            <MDBCollapse isOpen={this.state.collapsed} navbar>
              <MDBNavbarNav right onClick={this.handleNavbarClick}>
                <MDBFormInline className="md-form mr-auto m-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  <MDBBtn outline color="blue" size="sm" type="submit" className="mr-auto">
                    Rechercher
                  </MDBBtn>
                </MDBFormInline>
              </MDBNavbarNav>
            </MDBCollapse>
          </Router>
        </MDBNavbar>
      </MDBCol>
     </MDBContainer>
    );
  }
}

export default Search;