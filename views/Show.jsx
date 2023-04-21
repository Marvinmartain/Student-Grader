const React = require("react");

class Show extends React.Component {
    render() {
const student = this.props.student
return (
<div>
    <h1> Show Page </h1>
    <div>
    
    <h3> 
    {" "}
     {student.name +" "} 
    is {" " + student.good +","} 
     
    {student.good
    ? ' Pass... Course Completed' 
    : ' Fail... Take class again' } 
    </h3>

    </div>
       
      
</div>
);
}
}

module.exports = Show;