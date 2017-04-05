var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (<div>
			<h1>R</h1>
            <button id="add-question-btn" className="btn btn-success" onClick={this.props.handleButton}>添加问题</button>
		</div>);
	}
});