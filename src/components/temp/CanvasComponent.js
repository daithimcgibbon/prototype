import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import circle from './canvas/circle'
import text from './canvas/text'
import line from './canvas/line'
import styles from './../../dist/css/style.css'

export default class CanvasComponent extends React.Component {

    componentDidMount() {
      this.updateCanvas()
    }

    componentDidUpdate() {
      this.updateCanvas()
    }

    updateCanvas() {
      const context = this.refs.canvas.getContext('2d')

      // knob
      circle({context, centerX: 50, centerY: 50, radius: 45, sAngle: 0, fillColor: '#FFFFFF', lineWidth: 1})

      line({context, startX: 50, startY: 50, endX: 50, endY: 5, lineWidth: 2, lineColor: '#000000'})
      context.rotate(-5)
      // line({context, startX: 50, startY: 50, endX: 80, endY: 20, lineWidth: 2, lineColor: '#000000'})
      // line({context, startX: 50, startY: 50, endX: 120, endY: 35, lineWidth: 2, lineColor: '#000000'})

      // line({context, startX: 50, startY: 50, endX: 95, endY: 50, lineWidth: 2, lineColor: '#000000'})
      // line({context, startX: 50, startY: 50, endX: 50, endY: 95, lineWidth: 2, lineColor: '#000000'})
      // line({context, startX: 50, startY: 50, endX: 5, endY: 50, lineWidth: 2, lineColor: '#000000'})

      // circle({context, centerX: 50, centerY: 50, radius: 30, sAngle: 0, fillColor: '#FFFFFF', lineWidth: 3})
      // circle({context, centerX: 50, centerY: 50, radius: 25, sAngle: 0, fillColor: '#000000', lineWidth: 1})

      // indents
      // line({context, startX: 50, startY: 5, endX: 50, endY: 20, lineWidth: 2, lineColor: '#000000'})
      // line({context, startX: 60, startY: 10, endX: 65, endY: 30, lineWidth: 2, lineColor: '#000000'})
      // line({context, startX: 70, startY: 15, endX: 80, endY: 40, lineWidth: 2, lineColor: '#000000'})
      // line({context, startX: 80, startY: 50, endX: 95, endY: 50, lineWidth: 2, lineColor: '#000000'})

      // line({context, startX: 50, startY: 80, endX: 50, endY: 95, lineWidth: 2, lineColor: '#000000'})
      // line({context, startX: 20, startY: 50, endX: 5, endY: 50, lineWidth: 2, lineColor: '#000000'})


      // title
      text({context, x: 30, y: 120, font: '16px Arial', text: 'KNOB'})
    }

    render() {
        return (
          <canvas ref="canvas" width={100} height={130} className={styles.temp} />
        )
    }
}
