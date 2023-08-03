import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
  {
    language: 'HTML + CSS',
    level: 'intermediate',
    color: 'red',
  },
  {
    language: 'Python',
    level: 'beginner',
    color: 'lightblue',
  },
  {
    language: 'React',
    level: 'beginner',
    color: '#16b2ab',
  },
  {
    language: 'Node',
    level: 'intermediate',
    color: 'aquamarine',
  },
  {
    language: 'GXC',
    level: 'advanced',
    color: 'green',
  },
];

function App() {
  const name = 'von Schappler';
  const about =
    'I am a brazilian autistic individual, passionate with coding. I am currently learning React, altough I know a bit of it already! Among other stuff, I am graduated on Computational Physics and worked for 5 years with Geophysical Data Processing in 2 different companies.';
  return (
    <div className='card'>
      <Avatar file='img/profile.png' />
      <div className='data'>
        <Intro name={name} bio={about} />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.file} alt='Profile' className='avatar' />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div>
      <span className='skill' style={{ backgroundColor: skill.color }}>
        {skill.language} {skill.level === 'advanced' ? '💪' : skill.level === 'intermediate' ? '🤔' : '📖'}
      </span>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
