import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import circle from './circle'
import text from './text'
import line from './line'
import indentLine from './indentLine'

export default class Knob extends React.Component {

    componentDidMount() {
      this.updateCanvas()
    }

    componentDidUpdate() {
      this.updateCanvas()
    }

    drawIndentLines(context) {
      const numberOfDivisions = 12
      for(var i=0; i<12; i++) {
        context.rotate(30*Math.PI/180)
        if(i !== 5)
          indentLine({context, x: 0, y: -50, lineColor: '#000000', lineWidth: 3})
      }
    }

    updateCanvas() {
      const context = this.refs.canvas.getContext('2d')
      context.translate(50, 50)
      context.scale(0.5, 0.5)
      this.drawIndentLines(context)
      circle({context, radius: 50, sAngle: 0, fillColor: '#000000', lineWidth: 1})
      circle({context, radius: 45, sAngle: 0, fillColor: '#FFFFFF', lineWidth: 1})
      circle({context, radius: 43, sAngle: 0, fillColor: '#000000', lineWidth: 1})
      line({context, startX: 0, startY: 0, endX: 0, endY: -42, lineColor: '#FFFFFF', lineWidth: 4})
    }

    render() {
        return (
          <canvas ref="canvas" width={100} height={100} />
        )
    }
}
