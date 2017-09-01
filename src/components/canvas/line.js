export default (props) => {
  const {context, startX, startY, endX, endY, lineColor, lineWidth} = props
  context.lineWidth = lineWidth
  context.strokeStyle = lineColor
  context.moveTo(startX, startY)
  context.lineTo(endX, endY)
  context.stroke()
}
