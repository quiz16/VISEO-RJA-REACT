import React, {useEffect, useRef, useState} from 'react'
import './styles.less'

const Chart = props => {
  const canvasRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [lastX, setLastX] = useState(0)
  const [translated, setTranslated] = useState(0)
  const [draw, setDraw] = useState(false)

  const drawCanvas = (delta) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.translate(delta, 0)
    ctx.clearRect(-translated, 0, 600, 400)
    ctx.beginPath()
    ctx.arc(200, 300, 5, 0, 2 * Math.PI)
    ctx.fill()
    ctx.moveTo(0, 0)
    for (let i = 0; i < canvas.width * 4; i++) {
      ctx.lineTo(i, canvas.height + Math.sin(i * 0.01) * 100)
    }
    ctx.stroke()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = document.getElementsByClassName('chart-wrapper')[0].offsetWidth
    canvas.height = 200
    const ctx = canvas.getContext('2d')
    ctx.scale(1, -1)
    ctx.translate(0, -400)
    ctx.beginPath()
    ctx.arc(200, 300, 5, 0, 2 * Math.PI)
    ctx.fill()
    ctx.moveTo(0, 0)
    //ctx.clearRect(-translated, 0, 600, 400)
    for (let i = 0; i < canvas.width; i++) {
      ctx.lineTo(i, canvas.height + Math.sin(i * 0.008) * 100)
    }
    ctx.setLineDash([5, 5])
    ctx.strokeStyle = '#FAA047'
    ctx.stroke()
  }, [])

  const handleMove = (clientX) => {
    if (dragging) {
      let delta = clientX - lastX
      setTranslated(translated + delta)
      setLastX(clientX)
      drawCanvas(delta)
    }
  }

  const handleTouchStart = (e) => {
    let evt = e || window.event
    setDragging(true)
    setLastX(evt.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    let evt = e || window.event
    handleMove(evt.targetTouches[0].clientX)
  }

  const handleMouseMove = (e) => {
    let evt = e || window.event
    evt.preventDefault()
    handleMove(evt.clientX)
  }

  const handleMouseUp = (e) => {
    let evt = e || window.event
    evt.preventDefault()
    setDragging(false)
  }

  const handleMouseDown = (e) => {
    let evt = e || window.event
    evt.preventDefault()
    setDragging(true)
    setLastX(evt.clientX)
  }

  return (
    <div className="chart-wrapper">
      <canvas
        ref={canvasRef}
        id="canvas"
        onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
        onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
        onMouseMove={mouseMoveEvent => handleMouseMove(mouseMoveEvent)}
        onMouseDown={mouseDownEvent => handleMouseDown(mouseDownEvent)}
        onMouseUp={() => handleMouseUp()}
      ></canvas>
    </div>
  )
}

export default Chart
