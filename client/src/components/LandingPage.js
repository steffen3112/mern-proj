import React, { Component } from 'react'
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

export default class LandingPage extends Component {

    //~ Constructor
    //--------------------------------------------------------------------------------------------------------------------------

    constructor(props) {
        super(props);

    }

    //~ Lifecycle hooks
    //--------------------------------------------------------------------------------------------------------------------------

    componentDidMount() {

    }
    

    //~ Methods
    //--------------------------------------------------------------------------------------------------------------------------



    //~ Render func
    //--------------------------------------------------------------------------------------------------------------------------

    render() {
        return (
        <Container>
            <h3>Content following...</h3>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/SMPTE_Color_Bars_16x9.svg" width="100%" height="100%" />
        </Container>
        )
    }
}


//~ PropTypes
//--------------------------------------------------------------------------------------------------------------------------

LandingPage.propTypes = {

}

//~ Redux Stuff
//--------------------------------------------------------------------------------------------------------------------------