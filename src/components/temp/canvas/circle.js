
export default (props) => {
    const {context, centerX, centerY, radius, sAngle, fillColor, lineWidth} = props
    context.beginPath()
    context.lineWidth = lineWidth
    context.arc(centerX, centerY, radius, sAngle, 2*Math.PI)
    context.fillStyle = fillColor
    context.fill()
    context.stroke()
}
