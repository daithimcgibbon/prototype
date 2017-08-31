export default (props) => {
  const {context, x, y, lineWidth, lineColor} = props
  context.lineWidth = lineWidth
  context.strokeStyle = lineColor
  context.moveTo(0, 0)
  context.lineTo(x, y)
  context.stroke()
}
