import React, {useEffect, useRef} from 'react';
import './PointMapVisualization.css';

// Generally useful for creating this: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

const pointColor = '#F193B4FF'          // color of the points
const lineColor = 'rgba(139,220,154)'   // color of lines connecting neighbors (alpha channel is set later)
const pointCount = 200                  // total number of rendered points
const lineDistance = 100                // max distance to be marked as a neighbor of a point
const estimatedStartHeight = window.innerHeight
const estimatedStartWidth = window.innerWidth

const PointMapVisualization = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let animationFrameId

        const content = generateObjects(pointCount, estimatedStartWidth, estimatedStartHeight)
        const render = () => {
            resizeCanvas(canvas)
            tickPhysics(
                content,
                context.canvas.width / (window.devicePixelRatio || 1), //weird width and height math due to scaling involved in getting high pixel density devices (phones) to behave
                context.canvas.height / (window.devicePixelRatio || 1)
            )
            drawCanvas(context, content)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            // this is the clean-up function / componentDidUnmount.
            // ensure that any active animation is stopped
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className="CanvasTest">
            <canvas ref={canvasRef} id={'canvas-test-surface'}>Cannot Render Canvas</canvas>
        </div>
    )
};

function resizeCanvas(canvas){
    const { width, height } = canvas.getBoundingClientRect()
    if (canvas.width !== width || canvas.height !== height) {
        const ratio = window.devicePixelRatio || 1;
        const context = canvas.getContext('2d')
        canvas.width = width*ratio
        canvas.height = height*ratio
        context.scale(ratio, ratio)
        return true
    }
    return false
}

const drawCanvas = (context, pointMap) => {
    context.clearRect(0,0, context.canvas.width, context.canvas.height)
    drawConnectingLines(pointMap, context, lineDistance, lineColor)
    drawPoints(pointMap, context, pointColor)
}

function drawPoints(pointMap, context, color){
    context.fillStyle = color
    pointMap.forEach(point => {
        context.beginPath()
        context.arc(point.x, point.y, point.radius, 0, 2*Math.PI)
        context.fill()
    })
}

function drawConnectingLines(pointMap, context, maxDistance, color){
    pointMap.forEach(point => {
        const neighbors = locateNeighbors(pointMap, point, maxDistance)
        neighbors.forEach(neighbor => {
            const distanceRatio =  maxDistance / getDistanceBetweenPoints(neighbor, point) - 1
            context.strokeStyle = color.substring(0, color.length - 1) + `,${distanceRatio})` //hacky. but works perfectly.

            context.beginPath()
            context.moveTo(point.x, point.y)
            context.lineTo(neighbor.x, neighbor.y)
            context.stroke()
        })
    })
}

function generateObjects(count, width, height){
    return Array.from(new Array(count), (x, i) => ({
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height),
            xvel:(Math.random() + 0.001 - 0.5) * 0.3,
            yvel:(Math.random() + 0.001 - 0.5) * 0.3,
            radius: 3
        })
    )
}

function tickPhysics(pointMap, width, height){
    const minX = 0
    const minY = 0

    return pointMap.map(obj => {
        // tedious velocity calculations to ensure all points
        // return to the canvas in the event of a resize
        if(obj.x < minX && obj.xvel < 0){
            obj.xvel = Math.abs(obj.xvel)
        }
        if(obj.x > width && obj.xvel > 0){
            obj.xvel = -1 * Math.abs(obj.xvel)
        }
        if(obj.y < minY && obj.yvel < 0){
            obj.yvel = Math.abs(obj.yvel)
        }
        if(obj.y > height && obj.yvel > 0){
            obj.yvel = -1 * Math.abs(obj.yvel)
        }

        obj.x += obj.xvel
        obj.y += obj.yvel
        return obj
    })
}

function locateNeighbors(pointMap, target, target_distance){
    return pointMap.filter(point => {
        if(point.x === target.x && point.y === target.y && point.xvel === target.xvel && point.yvel === target.yvel){
            return false
        }
        return getDistanceBetweenPoints(point, target) <= target_distance
    })
}

function getDistanceBetweenPoints(pointA, pointB){
    return Math.sqrt( Math.pow((pointA.x - pointB.x), 2) + Math.pow((pointA.y - pointB.y), 2) )
}

export default PointMapVisualization;
