import React, { Component } from 'react';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import LazyLoad from 'react-lazyload';

class Contact extends Component {
  render() {
    return (
      <div id='contact' className='small-section'>
        <Segment basic>
          <Container>
            <Grid stackable>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Segment basic textAlign='center'>
                    <Header as='h1'>Ready to get started?</Header>
                    <Header as='h3'>Get in touch via phone or email.</Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment basic textAlign='center'>
                    <LazyLoad height={100}>
                      <div className='animated pulse text-container'>
                        <Header inverted>
                          <a href='tel:16618396248'>
                            (661) 839-6248
                          </a>
                        </Header>
                        <Header inverted>
                          <a href='mailto:rcurieltopete57@gmail.com'>
                            rcurieltopete57@gmail.com
                          </a>
                        </Header>
                      </div>
                    </LazyLoad>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  };
};

export default Contact;
