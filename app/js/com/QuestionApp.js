var React = require('react');
var ShowButton = require('./ShowButton.js');
var QuestionForm = require('./QuestionForm.js');
var QuestionList = require('./QuestionList.js');
var _ = require('lodash');

module.exports = React.createClass({
	getInitialState:function(){
		var qList = [{
			key:1,
			title:"说好的一起写代码呢",
			text:"呼拉呼拉拉 呼拉呼拉拉呼拉呼拉拉",
			count:10
		},{
			key:2,
			title:"写代码呢",
			text:"呼拉呼拉拉 呼拉呼拉拉呼拉呼拉拉",
			count:13
		}];
		return {
			qList:qList,
			formDisplayed: false,
		}
	},
	qCount:function(obj){
		obj.key = this.state.qList.length+1;
		var newqList = this.state.qList.concat(obj);
		newqList = this.sortList(newqList);
		this.setState({
			qList:newqList
		});
	},
	sortList:function(aq){
		aq.sort(function(a,b){
			return b.count-a.count;
		});
		return aq;
	},
	handleButton:function(){
		this.setState({
			formDisplayed:!this.state.formDisplayed
		});
	},

	onVote:function(key,newCount){
		var questions = _.uniq( this.state.qList );
		questions.map(function(qst){
			if(qst.key==key){
				qst.count = newCount;
			}
		});
		questions = this.sortList(questions);
		this.setState({
			qList:questions
		});
	},
	render:function(){
		return (<div>
	  <div className="jumbotron text-center">
          <div className="container">
         	 <ShowButton handleButton={this.handleButton} />
          </div>
      </div>
      <div className="main container">
      	<QuestionForm buttonStyle={this.state.formDisplayed}
      	handleButton={this.handleButton}
      	qCount={this.qCount} />

      	<QuestionList onVote={this.onVote} qList={this.state.qList} />

      </div>
		</div>);
	}
});