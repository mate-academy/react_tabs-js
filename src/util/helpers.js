export function findByIdOrGetFirst(id, array) {
  return array.find(element => element.id === id) || array[0];
}
