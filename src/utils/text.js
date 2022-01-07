export const pluralize = (count, text) => {
  return count <= 1 ? `${count} ${text}` : `${count} ${text}s`
}
