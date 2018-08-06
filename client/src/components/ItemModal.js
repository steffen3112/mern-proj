import React, { Component } from 'react';
import Modal from 'react-modal';
import uuid from 'uuid';

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
                id: uuid(),
                name: evt.target.value
            }
        })
    }

    render() {

        const { open, close, addItem } = this.props;
        const  { item } = this.state;

        return(
            <div>
                <Modal 
                    isOpen={open}
                    onRequestClose={close}
                    style={customStyles}
                >
                    <h2>Add an Item please</h2>
                    <button onClick={() => close()}>close</button>
                    <br />
               
                        <input type="text" onChange={(evt) => this.handleChange(evt)}/>
                        <button onClick={() => addItem(item)}>Add Item to Cart</button>
                    
                </Modal>
            </div>
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
      transform             : 'translate(-50%, -50%)'
    }
  };
