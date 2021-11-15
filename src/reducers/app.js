import * as highlightHelper from '../helpers/highlightHelper';

import { Map, List, fromJS } from 'immutable';

import { HIGHLIGHT_RANGE, REMOVE_HIGHLIGHTED_RANGE, RESET_HIGHLIGHTED_RANGE } from '../actions/appActions';

export default function app(state = new Map(), action) {
  switch (action.type) {
    case HIGHLIGHT_RANGE:
    if(state.getIn(['ranges', action.range.data.id], new List()).contains(fromJS(action.range))) {
      return state;
    }

    return state.setIn(['ranges', action.range.data.id], state.getIn(['ranges', action.range.data.id], new List()).push(fromJS(action.range)));
  case REMOVE_HIGHLIGHTED_RANGE:
    return state.setIn(['ranges', action.range.data.id], highlightHelper.remove(action.range, state.getIn(['ranges', action.range.data.id])));
  case RESET_HIGHLIGHTED_RANGE:
    return state.set('ranges', new Map());
    default:
      return state;
  }
}
