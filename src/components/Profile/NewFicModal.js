import React, { Component } from 'react'
import axios from 'axios';
import API from "../../api";
//const ficStaticData = import('../../static/ficFields');

import './NewFicModal.scss';
import { Modal, Button, Form, TextArea } from 'semantic-ui-react';

const categories = ficStaticData.getCategories();
const genres = ficStaticData.getGenres();

export default class NewFicModal extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, title: '', synopsis: '', category: '', genres: '', adult: false};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let fic = {
      title: this.state.title.trim(),
      synopsis: this.state.synopsis.trim(),
      category: this.state.category,
      genres: this.state.genres.split(' '),
      adult: this.state.adult
    };

    console.log("new fic", fic);

    // API.post('/api/fic', fic)
    //   .then(response => {
    //     if (response.status === 201) {
    //       const { onChange } = this.props;
    //       onChange(response.data.data);
    //     }
    //   }).catch(error => {
    //   console.log('new collection error: ');
    //   console.log(error);
    // });

    this.close();
  }

  render() {
    const { open } = this.state;
    const nameLength = this.state.title.trim().length;
    const descriptionLength = this.state.synopsis.trim().length;

    return (
      <div>
        
        <Button compact floated='right' color="violet" inverted active onClick={this.show}>New Fic</Button>

        <Modal dimmer="blurring" size='small' open={open} onClose={this.close}>
          <Modal.Header>New Fic</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input required label='Title'  placeholder='Your Fic title' value={this.state.title}
                          name='title' onChange={this.handleInputChange} maxLength='40' />
              <label className={(nameLength < 40) ? 'characterLabel' : 'characterLabelComplete'}>{ nameLength + '/40' }</label>

              <Form.Field required control={TextArea} label='Synopsis' placeholder="Write the Fic's synopsis"
                          value={this.state.synopsis} maxLength='200'
                          name='synopsis' onChange={this.handleInputChange}/>
              <label className={(descriptionLength < 200) ? 'characterLabel' : 'characterLabelComplete'}>{ descriptionLength + '/200' }</label>

              <Form.Dropdown required value={this.state.category} label="Category" placeholder="Category" fluid selection options={categories}/>

              <Form.Dropdown required value={this.state.genres} label="Genres" placeholder="Category" fluid multiple selection options={genres}/>

              <Modal.Actions>
                <Button className='saveNewFic' inverted type='submit' color='violet' floated='right'
                        icon='checkmark' labelPosition='right' content='Create' />
                <Button floated='right' onClick={this.close}>Cancel</Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
