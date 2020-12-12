function orderByField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1)
}
export default orderByField
