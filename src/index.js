import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var marked = require('marked');


class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    value: ''
  }
}

changeInput(value) {
  this.setState({
    value: value
  });
}

createMarkup(value) {
  var rawInput = marked(value, {sanitize: true});
  return {__html: rawInput};
}

render() {
  return (
    <div>
      <div id="title">A Very Simple Markdown Previewer</div>
      <Entry value={this.state.value} changeVal={this.changeInput.bind(this)}/>
      <div className="display" dangerouslySetInnerHTML={this.createMarkup(this.state.value)} />
      <span className="foot"> Created by <a href="https://github.com/alan2207" target="__blank">alan</a></span>
    </div>
  )
}
}

function Entry(props) {
return (
    <textarea placeholder="Your Markdown Should Be Entered Here..." value={props.value} rows="32" cols="40" type="text" onChange={(e) => props.changeVal(e.target.value)}/>
)
}


ReactDOM.render(
<App />,
document.getElementById('root')
);