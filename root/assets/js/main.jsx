setInterval(function(){
  React.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
  );
}, 500);