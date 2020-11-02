import React from 'react';
import HeroCard from './HeroCard';
import './HeroCard.css';

/*import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'*/

// function Page (props) {
//   return <div>{props.text}</div>
// }

// const Page = (props) => {
//   if (props.x > 5) {
//     return <div>{props.text}</div>
//   } else {
//     return <div>{props.x}</div>
//   }
// }

// const Page = (props) => <div>{props.text}</div>;

// class Page extends React.Component {
//   render() {
//     return <div>{this.props.text}</div>
//   }
// }

// const Error = () => {
//   return function() {}
// }

const Heroes = props => (
  <div>
    <div className="headingDiv">
      <h1>ГЕРОИ</h1>  
    </div>
    <div className='firstDiv'>
      <HeroCard />  
      <HeroCard />  
      <HeroCard />  
      <HeroCard />       
    </div>        
  </div>
)

/*const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heroes)*/

export default Heroes;
