export default function addTitleError ( error, title = "Action Failed" ) {
  return Object.assign({}, error, { title })
}