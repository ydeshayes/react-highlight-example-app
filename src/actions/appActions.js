export const HIGHLIGHT_RANGE = 'HIGHLIGHT_RANGE';
export const REMOVE_HIGHLIGHTED_RANGE = 'REMOVE_HIGHLIGHTED_RANGE';
export const RESET_HIGHLIGHTED_RANGE = 'RESET_HIGHLIGHTED_RANGE';

export function highlightRange(range){
  return {type: HIGHLIGHT_RANGE, range};
}

export function removeHighlightRange(range) {
  return {type: REMOVE_HIGHLIGHTED_RANGE, range};
}

export function resetHighlightRange() {
  return {type: RESET_HIGHLIGHTED_RANGE};
}
