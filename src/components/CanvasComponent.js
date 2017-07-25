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
      circle({context, centerX: 50, centerY: 50, radius: 40, sAngle: 0, fillColor: '#FFFFFF', lineWidth: 3})
      circle({context, centerX: 50, centerY: 50, radius: 35, sAngle: 0, fillColor: '#000000', lineWidth: 1})
      text({context, x: 30, y: 120, font: '16px Arial', text: 'KNOB'})
      line({context, startX: 50, startY: 50, endX: 50, endY: 15, lineWidth: 5, lineColor: '#FFFFFF'})
    }

    render() {
        return (
          <canvas ref="canvas" width={100} height={130} className={styles.temp} />
        )
    }
}
