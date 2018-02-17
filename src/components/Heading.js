import React, { Component } from 'react';
import { Button, Container, Image, Segment } from 'semantic-ui-react';

const airplane = require('../media/airplane.png');

class Heading extends Component {
  componentDidMount() {
    function parallaxEffect() {
    	const parallaxNode = document.getElementById('heading');
    	let yCoordinate = window.pageYOffset / parallaxNode.dataset.speed;

    	yCoordinate = -yCoordinate;

    	const coordinates = '0% '+ yCoordinate + 'px';

    	parallaxNode.style.backgroundPosition = coordinates;
    }

    window.addEventListener('scroll', () => parallaxEffect());
  }
  render() {
    return (
      <div
        id='heading'
        className='large-section'
        data-type="background"
        data-speed="3"
      >
        <Segment basic textAlign='center'>
          <Container text>
            <div className='text-container'>
              <h6>Raul Curiel</h6>
              <h1 className='section-header'>RC Precision Grinding</h1>
              <Image
                className='animated fadeInLeft heading-logo'
                centered
                size='medium'
                src={airplane}
              />
              <p>
                Expert, High Quality Grinding — Great Prices and Parts Delivery
              </p>
              <p>
                40+ Years Professional Experience | Serving Southern California
              </p>
              <a href='#details'>
                <Button>Learn More</Button>
              </a>
            </div>
          </Container>
        </Segment>
      </div>
    );
  };
};

export default Heading;
