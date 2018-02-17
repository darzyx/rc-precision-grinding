import React, { Component } from 'react';
import { Container, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import LazyLoad from 'react-lazyload';

class Lead extends Component {
  render() {
    return (
      <div id='lead' className='small-section'>
        <Segment basic>
          <Container>
            <Header inverted textAlign='center'>As simple as</Header>
            <Grid stackable columns={3}>
              <Grid.Column>
                <Segment basic textAlign='center'>
                  <LazyLoad height={100}>
                    <Icon
                      className='animated flipInY'
                      inverted
                      name='exchange'
                      size='massive'
                    />
                  </LazyLoad>
                  <Header inverted>One</Header>
                  <p>
                    Get in touch and receive a competitive quote directly from
                    me.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic textAlign='center'>
                  <LazyLoad height={100}>
                    <Icon
                      className='animated rotateIn'
                      inverted
                      name='wrench'
                      size='massive'
                    />
                  </LazyLoad>
                  <Header inverted>Two</Header>
                  <p>
                    I build the parts using state of the art precision
                    grinding equipment.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic textAlign='center'>
                  <LazyLoad height={100}>
                    <Icon
                      className='animated fadeInUp'
                      inverted
                      name='plane'
                      size='massive'
                    />
                  </LazyLoad>
                  <Header inverted>Three</Header>
                  <p>
                    I personally deliver them for you to use in your ambitious
                    projects.
                  </p>
                </Segment>
              </Grid.Column>
            </Grid>
            <Header inverted textAlign='center'>
              No middleman—a streamlined ordering process.
            </Header>
          </Container>
        </Segment>
      </div>
    )
  }
}

export default Lead;
