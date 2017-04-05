var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	handleSubmit:function(e){
		e.preventDefault();
		if(!ReactDOM.findDOMNode(this.refs.title).value) return;
		var qCount = {
			title:ReactDOM.findDOMNode(this.refs.title).value,
			text:ReactDOM.findDOMNode(this.refs.text).value,
			count:0
		};
		ReactDOM.findDOMNode(this.refs.formRef).reset();
		this.props.qCount(qCount);
	},
	render:function(){
		var objStyle = {
			display:this.props.buttonStyle ? 'block' : 'none'	
		}
		return (<div>
			<form ref="formRef" style={ objStyle } name="addQuestion" className="clearfix" onSubmit={this.handleSubmit}>
	          <div className="form-group">
	            <label htmlFor="qtitle">问题</label>
	            <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
	          </div>
	          <textarea ref="text" className="form-control" rows="3" placeholder="问题的描述"></textarea>
	          <button className="btn btn-success pull-right" type="submit">确认</button>
	          <button className="btn btn-default pull-right" onClick={this.props.handleButton}>取消</button>
	        </form>
		</div>);
	}
});