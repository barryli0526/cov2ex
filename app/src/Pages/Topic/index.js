import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../Actions'
import {Content} from '../../Components'
import { withRouter } from 'react-router';

class Topic extends Component {
  render() {
    const isEmpty = !this.props.topic.hasOwnProperty('member')
    const empty = null
    return (
      <div className="co-topic-detail">
        {!isEmpty && <Content topic={this.props.topic} />}

        {isEmpty && <Content topic={empty} />}
      </div>
    );
  }
}

const mapStateToProps = (state, owerProps) => {
  let topic = {};
  if (state.Topics && state.Topics.payload && owerProps.match.params.id) {
    topic = state.Topics.payload.find((t) => {
      return (parseInt(t.id,10) === parseInt(owerProps.match.params.id,10))
    })
  }
  return { topic: topic }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Topic))
