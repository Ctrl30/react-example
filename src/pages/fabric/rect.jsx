import React, { Component } from "react";
import { fabric } from 'fabric-with-gestures';
// import { fabric } from 'fabric';

export default class Rect extends Component {
  componentDidMount() {
    var canvas = new fabric.Canvas('c');
    const path = new fabric.Path('M 200 200 L 500 200')
    path.set({
        stroke: 'balck'
    })
    // console.log('aaa',fabric.isTouchSupported)
    // alert(fabric.isTouchSupported);
    canvas.allowTouchScrolling = true
    var pathInfo = fabric.util.getPathSegmentsInfo(path.path);
    console.log(pathInfo)
    canvas.add(path)
    console.log('path', path)
    const path2 = new fabric.Path('M 65 0 Q 100, 100, 200, 0', { fill: '', stroke: 'black', objectCaching: false });
    var pathInfo2 = fabric.util.getPathSegmentsInfo(path2.path);
    path2.segmentsInfo = pathInfo2;
    var pathLength = pathInfo2[pathInfo2.length - 1].length;
    canvas.add(path2);
    const str = 'jklsahdgfjlhasgdjkfgjahksgdfjkhsagdfl;asuduyfsancbyzgasjhdg'
    var fontSize = 2.5 * pathLength / str.length;
    var text = new fabric.Text(str, {fontSize, path: path2, top: path2.top, left: path2.left });
    canvas.add(text);
    canvas.renderAll();
  }
  render() {
    return (
      <div>
        <h1>Rect</h1>
        <canvas id="c" width={600} height={600}></canvas>
      </div>
    );
  }
}
