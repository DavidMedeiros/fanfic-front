import React, { Component } from 'react'
import API from "../../api";
import { getCategories, getGenres } from '../../static/ficFields';

import './NewFicModal.scss';
import { Modal, Button, Form, TextArea, Loader, Transition, Icon, Container, Header } from 'semantic-ui-react';

const categories = getCategories();
const genres = getGenres();

export default class NewFicModal extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, submited: false, isLoading: false, ficCreated: false, title: '', synopsis: '', category: '', genres: '', adult: false};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreatedTransition = this.handleCreatedTransition.bind(this);
  }

  show = () => this.setState({ open: true, submited: false });
  close = () => this.setState({ open: false });

  resetForm() {
    this.setState({ title: '', synopsis: '', category: '', genres: '', adult: false});
  }

  handleInputChange(event, data) {
    let value = data.value;
    let name = data.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submited: true, isLoading: true});

    let fic = {
      title: this.state.title.trim(),
      synopsis: this.state.synopsis.trim(),
      category: this.state.category,
      genres: this.state.genres,
      adult: this.state.adult,
      _author: this.props.userId
    };

    API.post('/fic', fic)
      .then(response => {
        if (response.status === 200) {
          const { onChange } = this.props;
          onChange(response.data.result);
          this.setState({isLoading: false, ficCreated: true})
        }
      }).catch(error => {
        this.setState({isLoading: false, ficCreated: false })
        console.error('new fic error: ', error);
      }).finally(() => this.resetForm());
  }

  handleCreatedTransition() {
    setTimeout(() => {
      this.close();
    }, 1500)
  }

  render() {
    let { open } = this.state;
    let nameLength = this.state.title.trim().length;
    let descriptionLength = this.state.synopsis.trim().length;
    let loader = <div></div>;

    if (this.state.isLoading) {
      loader = (
        <Container textAlign="center">
          <Header as="h2" className="loader-text">
            <Loader active={this.state.isLoading} size="big"/>
            Creating Fic...
          </Header>
        </Container>
      );
    }

    return (
      <div>  
        <Button compact floated='right' color="violet" inverted active onClick={this.show}>New Fic</Button>

        <Modal dimmer="inverted" size='small' open={open} onClose={this.close}>
          <Modal.Header>New Fic</Modal.Header>
          {(this.state.submited) ? 
          <Modal.Content className="submited">
            {loader}
            <Transition visible={(!this.state.isLoading && this.state.ficCreated)} animation='horizontal flip' duration={500} onStart={this.handleCreatedTransition}>
              <Container textAlign="center">
                <Header as="h2">
                  <Icon name='check circle' color="green" />
                  Fic Created!
                </Header>
              </Container>
            </Transition>

            <Transition visible={!(this.state.isLoading || this.state.ficCreated)} animation='horizontal flip' duration={500} onStart={this.handleCreatedTransition}>
              <Container textAlign="center">
                <Header as="h2">
                  <Icon name='times circle outline' color="red" />
                  An error ocurred, sorry =(
                </Header>
              </Container>
            </Transition>
          </Modal.Content>
          : 
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input required label='Title'  placeholder='Your Fic title' value={this.state.title}
                          name='title' onChange={this.handleInputChange} maxLength='40' />
              <label className={(nameLength < 40) ? 'characterLabel' : 'characterLabelComplete'}>{ nameLength + '/40' }</label>

              <Form.Field required control={TextArea} label='Synopsis' placeholder="Write the Fic's synopsis"
                          value={this.state.synopsis} maxLength='200'
                          name='synopsis' onChange={this.handleInputChange}/>
              <label className={(descriptionLength < 200) ? 'characterLabel' : 'characterLabelComplete'}>{ descriptionLength + '/200' }</label>

              <Form.Dropdown required name="category" label="Category" placeholder="Category" fluid selection options={categories} onChange={this.handleInputChange}/>

              <Form.Dropdown required name="genres" label="Genres" placeholder="Genres" fluid multiple selection options={genres} onChange={this.handleInputChange}/>

              <Modal.Actions>
                <Button className='saveNewFic' inverted type='submit' color='violet' floated='right'
                        icon='checkmark' labelPosition='right' content='Create' />
                <Button floated='right' onClick={this.close}>Cancel</Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>}
        </Modal>
      </div>
    )
  }
}
