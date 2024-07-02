export function findByIdOrGetFirst(id, array) {
  return array.find(el => el.id === id) || array[0];
}
