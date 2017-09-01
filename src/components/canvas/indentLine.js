export default (props) => {
  const {context, x, y, lineColor, lineWidth} = props
  context.lineWidth = lineWidth
  context.strokeStyle = lineColor
  context.moveTo(0, 0)
  context.lineTo(x, y-20)
  context.stroke()
}
