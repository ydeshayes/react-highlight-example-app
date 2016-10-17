export function remove(range, ranges) {
  if(!ranges || !ranges.size) {
    return ranges;
  }
  
  const immutableRange = ranges.find(r => r.data.id === range.data.id && r.start === range.start && r.end === range.end);
  const index = ranges.indexOf(immutableRange);

  return ranges.remove(index);
}
