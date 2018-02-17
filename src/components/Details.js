import React, { Component } from 'react';
import { Container, Grid, Image, Segment } from 'semantic-ui-react';
import LazyLoad from 'react-lazyload';

const sampleProducts = require('../media/sample-products.jpg');

class Details extends Component {
  render() {
    return (
      <div id='details' className='large-section'>
        <Segment basic>
          <Container>
            <Grid stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <LazyLoad height={500}>
                    <Image className='animated fadeIn' src={sampleProducts} />
                  </LazyLoad>
                  <p><i>Sample Products</i></p>
                </Grid.Column>
                <Grid.Column width={8}>
                  <div className='text-container'>
                    <h2 className='section-header'>Further Details</h2>
                    <p>
                      RC Precision Grinding is a streamlined one man operation
                      serving the Southern California area. RC Precision Grinding
                      specializes in crafting parts such as input shafts, crank
                      assy, pistons, angular parts, spherical radius parts, and
                      much, much more. With decades of experience and state of
                      the art equipment, you know you can count on RC Precision
                      Grinding whenever precision truly matters. Get in touch for
                      a quote.
                    </p>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  };
};

export default Details;
