const React = require('react');

class Index extends React.Component {
  render() {
const {students}  = this.props;
return (
<div>
<h1>Students Index Page</h1>
<nav>
<a href="/students/new">Create a New Students</a>
</nav>
<ul>
     {students.map((student, i) => {
return (
<li key={i}>
    {' '}
<a href={`/students/${i}`}>
    {student.name}
</a>{' '}
    grade is {student.grade} <br></br>
    {student.good
    ? `Student has passed`
    : `Student has failed`}
<br />
</li>
);
})}
</ul>
</div>
);
}
}
module.exports = Index;