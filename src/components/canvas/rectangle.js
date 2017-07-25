
export default (props) => {
    const {context, x, y, width, height, fillColor} = props
    context.fillStyle = fillColor
    context.fillRect(x, y, width, height)
}
