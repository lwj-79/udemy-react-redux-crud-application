import React, {Component} from 'react';
import { connect } from 'react-redux'
import {readEvents } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class EventIndex extends Component{
  componentDidMount(){
    this.props.readEvents();
  }

  readerEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }
  render(){

    console.log("render");
    return(
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
              {this.readerEvents()}
          </tbody>
        </table>
        <Link to = "/events/new">New Event</Link>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({ events: state.events })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const mapDispatchToProps = ({readEvents});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)
//export default App;
