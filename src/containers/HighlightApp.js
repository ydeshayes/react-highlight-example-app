import * as appActions from '../actions/appActions';

import Highlightable from 'highlightable';
import RaisedButton  from 'material-ui/RaisedButton';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import React, { Component, PropTypes } from 'react';
import { Map , List, is, fromJS } from 'immutable';
import { connect } from 'react-redux';

class HighlightApp extends Component {
  constructor(props) {
    super(props);
  }

  onTextHighlighted(range) {
    this.props.highlightRange(range);
    window.getSelection().removeAllRanges();
  }

  tooltipRenderer(lettersNode, range, rangeIndex, onMouseOverHighlightedWord) {
      return (<Tooltip key={`${range.data.id}-${rangeIndex}`} onVisibleChange={onMouseOverHighlightedWord.bind(this, range)}
                          placement="top"
                          overlay={<div><RaisedButton label={'Reset highlights'} onClick={this.resetHightlight.bind(this, range)} /></div>}
                          defaultVisible={true}
                          animation="zoom">
          <span>{lettersNode}</span>
      </Tooltip>);
  }

  customRenderer(currentRenderedNodes, currentRenderedRange, currentRenderedIndex, onMouseOverHighlightedWord) {
    return this.tooltipRenderer(currentRenderedNodes, currentRenderedRange, currentRenderedIndex, onMouseOverHighlightedWord);
  }

  resetHightlight(range) {
    this.props.removeHighlightRange(range);
  }

  render() {
    return (
      <div className="row center-xs">
        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
          <a href="https://github.com/ydeshayes/react-highlight-example-app">
            <img style={{position: 'absolute', top: 0, right: 0, border: 0}} src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" alt="Source" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" />
          </a>
          <h1>Simple highlight example</h1>
          <Highlightable ranges={this.props.ranges.get('1', new List()).toJS()}
                 enabled={true}
                 style={{textAlign: 'left'}}
                 onTextHighlighted={this.onTextHighlighted.bind(this)}
                 id={'1'}
                 highlightStyle={{
                   backgroundColor: '#ffcc80'
                 }}
                 text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae magna lacus. Sed rhoncus tortor eget venenatis faucibus. Vivamus quis nunc vel eros volutpat auctor. Suspendisse sit amet lorem tristique lectus hendrerit aliquet. Aliquam erat volutpat. Vivamus malesuada, neque at consectetur semper, nibh urna ullamcorper metus, in dapibus arcu massa feugiat erat. Nullam hendrerit malesuada dictum. Nullam mattis orci diam, eu accumsan est maximus quis. Cras mauris nibh, bibendum in pharetra vitae, porttitor at ante. Duis pharetra elit ante, ut feugiat nibh imperdiet eget. Aenean at leo consectetur, sodales sem sit amet, consectetur massa. Ut blandit erat et turpis vestibulum euismod. Cras vitae molestie libero, vel gravida risus. Curabitur dapibus risus eu justo maximus, efficitur blandit leo porta. Donec dignissim felis ac turpis pharetra lobortis. Sed quis vehicula nulla.'}
          />

          <h1>Example with tooltip</h1>
          <Highlightable ranges={this.props.ranges.get('2', new List()).toJS()}
                 enabled={true}
                 style={{textAlign: 'left'}}
                 onTextHighlighted={this.onTextHighlighted.bind(this)}
                 id={'2'}
                 highlightStyle={{
                   backgroundColor: '#ffcc80'
                 }}
                 rangeRenderer={this.customRenderer.bind(this)}
                 text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae magna lacus. Sed rhoncus tortor eget venenatis faucibus. Vivamus quis nunc vel eros volutpat auctor. Suspendisse sit amet lorem tristique lectus hendrerit aliquet. Aliquam erat volutpat. Vivamus malesuada, neque at consectetur semper, nibh urna ullamcorper metus, in dapibus arcu massa feugiat erat. Nullam hendrerit malesuada dictum. Nullam mattis orci diam, eu accumsan est maximus quis. Cras mauris nibh, bibendum in pharetra vitae, porttitor at ante. Duis pharetra elit ante, ut feugiat nibh imperdiet eget. Aenean at leo consectetur, sodales sem sit amet, consectetur massa. Ut blandit erat et turpis vestibulum euismod. Cras vitae molestie libero, vel gravida risus. Curabitur dapibus risus eu justo maximus, efficitur blandit leo porta. Donec dignissim felis ac turpis pharetra lobortis. Sed quis vehicula nulla.'}
          />
          <h1>Example with url and smiley</h1>
          <Highlightable ranges={this.props.ranges.get('3', new List()).toJS()}
                 enabled={true}
                 style={{textAlign: 'left'}}
                 onTextHighlighted={this.onTextHighlighted.bind(this)}
                 id={'3'}
                 highlightStyle={{
                   backgroundColor: '#ffcc80'
                 }}
                 text={'Lorem ipsum dolor sit amet, http://www.google.fr consectetur adipiscing elit. In vitae magna lacus. Sed rhoncus tortor eget venenatis faucibus. Vivamus quis nunc vel eros volutpat auctor. Suspendisse sit amet lorem tristique lectus hendrerit aliquet. Aliquam erat volutpat. Vivamus malesuada, neque at consectetur semper, nibh urna ullamcorper metus, in dapibus arcu massa 😘 feugiat erat. Nullam hendrerit malesuada dictum. Nullam mattis orci diam, eu accumsan est maximus quis. Cras mauris nibh, bibendum in pharetra vitae, porttitor at ante. Duis pharetra elit ante, ut feugiat nibh imperdiet eget. Aenean at leo consectetur, sodales sem sit amet, consectetur massa. Ut blandit erat et turpis vestibulum euismod. Cras vitae molestie libero, vel gravida risus. Curabitur dapibus risus eu justo maximus, efficitur blandit leo porta. Donec dignissim felis ac turpis pharetra lobortis. Sed quis vehicula nulla.'}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ranges: state.app.get('ranges', new Map())
  };
}

function mapDispatchToProps(dispatch) {
  return {
    highlightRange: range => dispatch(appActions.highlightRange(range)),
    removeHighlightRange: range => dispatch(appActions.removeHighlightRange(range))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HighlightApp);
