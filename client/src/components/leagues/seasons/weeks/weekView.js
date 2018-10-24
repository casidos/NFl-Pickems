import React, { Component } from 'react';
import MatchupList from './matchups/matchupList'

class WeekView extends Component {

  render(){
    return(
      <div>
      currently viewing week # {this.props.week.weekNumber}
      <MatchupList matchups={this.props.week.matchups}/>
      </div>
    )
  }
}

export default WeekView
