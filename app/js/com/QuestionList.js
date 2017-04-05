var React = require('react');
var QuestionItem = require('./QuestionItem.js');

module.exports = React.createClass({
	render:function(){
		var questions = this.props.qList;
		if( !Array.isArray(questions) ) throw new Error('this.props.questions问题必须是数组');
		var qListDom = questions.map(function(qst){
			return <QuestionItem key={qst.key}
			nCount={qst.key}
			title={qst.title}
			text={qst.text}
			count={qst.count} 
			onVote={ this.props.onVote } />
		}.bind(this));

		return (<div>
        <div id="questions" className="">
        	{qListDom}
        </div>
		</div>);
	}
});
