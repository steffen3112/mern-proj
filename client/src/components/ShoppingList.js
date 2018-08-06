import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

import { connect } from 'react-redux';
import { getItems, addItem } from '../actions/itemActions';

import PropTypes from 'prop-types';
import ItemModal from './ItemModal';

class ShoppingList extends Component {

    constructor(){
        super();

        this.state = {
            isOpen: false
        }
    }
    
    componentDidMount() {
        this.props.getItems();
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    closeModal = () => {
        this.setState({isOpen: false})
    }

    render() {

        const { item } = this.props.item;
        const { isOpen } = this.state;

        const addItem = this.props.addItem;

        console.log(this.props);

        return(
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: "2rem"}}
                    onClick={() => this.openModal()}
                >Add Item
                </Button>
                <ItemModal open={isOpen} close={this.closeModal} addItem={addItem}/>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        { item != 'undefined' && item != null ? item.map( ({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => console.log("hello")}
                                >&times;
                                </Button>
                                {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ) ) 
                        : null        
                    }
                    </TransitionGroup>
                </ListGroup>
            </Container>

        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.array.isRequired
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    getItems: () => dispatch(getItems)
})

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);