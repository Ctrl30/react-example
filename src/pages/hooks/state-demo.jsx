// import { Button } from 'antd';
import React from 'react'

// export default function StateDemo() {
//   const [count, setCount] = React.useState(0)
  
//   return (
//     <div>
//       <div>{count}</div>
//       <Button onClick={()=>setCount(count+1)}>Click me </Button>
//     </div>
//   )
// }
class FuckEvent extends React.PureComponent {
  state = {
    showBox: false
  }
  componentDidMount() {
    document.body.addEventListener('click', this.handleClickBody, false)
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClickBody, false)
  }
  handleClickBody = () => {
    this.setState({
      showBox: false
    })
  }
  handleClickButton = () => {
    this.setState({
      showBox: true
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickButton}>点击我显示弹窗</button>

        {this.state.showBox && (
          <div onClick={e => {e.stopPropagation();e.preventDefault()}}>我是弹窗</div>
        )}
      </div>
    )
  }
}
export default FuckEvent;