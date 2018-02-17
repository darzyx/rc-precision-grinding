import React, { Component } from 'react';
import { Container, Grid, Image, Segment } from 'semantic-ui-react';
import LazyLoad from 'react-lazyload';

const portrait = require('../media/portrait.png');

class About extends Component {
  render() {
    return (
      <div id='about' className='large-section'>
        <Segment basic>
          <Container>
            <Grid stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <div className='text-container'>
                    <h2 className='section-header'>
                      About the Business Owner
                    </h2>
                    <p>
                      My name is Raul Curiel and I have been specializing in high
                      quality precision grinding of steel products for over 40
                      years. I am comitted to always delivering impeccable
                      products in a timely manner and at a very competitive price.
                      Customer satisfaction is goal number one. My strong
                      commitment to that principle is the foundation to the
                      success of my business. Get in touch, and allow me the
                      opportunity to meet or exceed your machining needs.
                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column width={8}>
                  <LazyLoad height={500}>
                    <Image src={portrait} />
                  </LazyLoad>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  };
};

export default About;
