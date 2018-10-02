import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import { connect } from 'react-redux';
import { getItems, addItem, deleteItem } from '../actions/itemActions';

import PropTypes from 'prop-types';
import ItemModal from './item-modal/ItemModal';

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

    addingItemHandler = (item) => {
        this.setState({
            isOpen: false
        }, () => this.props.addItem(item))
    }

    render() {

        const { item } = this.props.item;
        const { isOpen } = this.state;

        console.log(this.props);

        return(
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: "2rem"}}
                    onClick={() => this.openModal()}
                >Add Item
                </Button>
                <ItemModal open={isOpen} close={this.closeModal} addItem={this.addingItemHandler}/>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        { item != 'undefined' && item !== null ? item.map( (item) => (
                            <CSSTransition key={item._id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => this.props.deleteItem(item._id)}
                                >&times;
                                </Button>
                                {item.name}
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

// The Itemreducer returns a Object with an array and as key "item" --> this.props.item.item accesses the "item-array"
ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    deleteItem: id => dispatch(deleteItem(id)),
    getItems: () => dispatch(getItems())
})

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);