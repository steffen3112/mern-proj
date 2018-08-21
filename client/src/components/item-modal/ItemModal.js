import React, { Component } from 'react';
import Modal from 'react-modal';
import { Button, Input } from 'reactstrap'

import './modal.css'


Modal.setAppElement('#root')

export default class ItemModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: null
        }
    }

    handleChange = (evt) => {
        this.setState({
            item: {
                name: evt.target.value
            }
        })
    }

    render() {

        const { open, close, addItem } = this.props;
        const  { item } = this.state;

        return(
                <Modal 
                    isOpen={open}
                    onRequestClose={close}
                    style={customStyles}
                >
                    <h2>Add an Item please</h2>
                    <br />

                        <Input type="text" onChange={(evt) => this.handleChange(evt)}/>
                        <Button id="cancel-button" onClick={() => close()}>cancel</Button>
                        <Button id="add-button" color="primary" onClick={() => addItem(item)}>Add Item to Cart</Button>
                    
                </Modal>
        )
    }

}

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
  };
