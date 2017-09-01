
export default (props) => {
    const {context, radius, fillColor, lineWidth} = props
    context.beginPath()
    context.lineWidth = lineWidth
    context.arc(0, 0, radius, 0, 2*Math.PI)
    context.fillStyle = fillColor
    context.fill()
    context.stroke()
}
