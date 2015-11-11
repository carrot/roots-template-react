var HelloWorld = React.createClass({
  getInitialState: function() {
        return {name: ''};
          
  },
  handleChange: function(event) {
        this.setState({name: event.target.value});
          
  },
  render: function(){
    var name = this.state.name;
    return (
      <p>
        Hello, <input type="text" value={name} onChange={this.handleChange} placeholder="Your name here" />! <br/>
        It is {this.props.date.toTimeString()} <br />
        And here's some data binding &#8594; {name} <br />
        Ta-da!
      </p>
    );
  }
});
