var React = require('react');


var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p> 
        This is a weather application build on react. I have built this for
        the complete react web app develoer course.
      </p>
      <p>
        Here are some tools i used:
        <ul>
          <li>
            <a href="https://facebook.github.io/react"> React</a> -  This
            a javaScipt framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - This is the 
            API i used.
          </li>
        </ul>
      </p>
    </div>
  )
};


module.exports = About;
