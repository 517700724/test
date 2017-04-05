var React = require('react');

module.exports = React.createClass({
	upCount:function(){
		var newCount = this.props.count+1;
		this.props.onVote(this.props.nCount,newCount);
	},
	downCount:function(){
		var newCount = this.props.count-1;
		this.props.onVote(this.props.nCount,newCount);
	},
	render:function(){
		return (<div>
          <div className="media">
            <div className="media-left">
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-chevron-up" onClick={ this.upCount }></span>
                <span className="vote-count">{this.props.count}</span>
              </button>
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-chevron-down" onClick={this.downCount}></span>
              </button>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{this.props.title}</h4>
              <p>{this.props.text}</p>
            </div>
          </div>
		</div>);
	}
});