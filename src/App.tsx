import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

//Welcoming header
function Welcome() {
  return <h1>Welcome To The College Basketball Data Website</h1>;
}

// Takes data for one school
class Team extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div>
        <h2>{school}</h2>
        <h3>Mascot: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
      </div>
    );
  }
}

// Creates the team list
function TeamList() {
  return (
    <div>
      {teamsData.teams.map((team: TeamProps, index: number) => (
        <Team key={index} {...team} />
      ))}
    </div>
  );
}

//App function
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
