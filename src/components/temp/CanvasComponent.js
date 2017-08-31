import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import circle from './canvas/circle'
import text from './canvas/text'
import line from './canvas/line'
import indentLine from './canvas/indentLine'

export default class CanvasComponent extends React.Component {

    componentDidMount() {
      this.updateCanvas()
    }

    componentDidUpdate() {
      this.updateCanvas()
    }

    drawIndentLine(context) {
      indentLine({context, x: 0, y: -50, lineWidth: 2, lineColor: '#000000'})
    }

    updateCanvas() {
      const context = this.refs.canvas.getContext('2d')
      context.translate(100, 100)

      circle({context, centerX: 0, centerY: 0, radius: 50, sAngle: 0, fillColor: '#FFFFFF', lineWidth: 1})

      const numberOfDivisions = 8
      for(var i=0; i<numberOfDivisions; i++) {
        context.rotate(i/numberOfDivisions * (2 * Math.PI))
        this.drawIndentLine(context)
      }
    }

    render() {
        return (
          <canvas ref="canvas" width={200} height={200} />
        )
    }
}
