export default (props) => {
  const {context, x, y, font, text} = props
  context.font = font
  context.fillText(text, x, y)
}
