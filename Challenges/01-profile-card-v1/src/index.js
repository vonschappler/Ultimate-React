import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

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
      <Skill name='HTML+CCS' emoji='😆' bg='red' />
      <Skill name='Python' emoji='🤯' bg='lightblue' />
      <Skill name='React' emoji='📖' bg='#16b2ab' />
      <Skill name='Node' emoji='💥' bg='aquamarine' />
      <Skill name='GXC' emoji='🤔' bg='green' />
    </div>
  );
}

function Skill(props) {
  const style = {
    backgroundColor: props.bg,
  };
  return (
    <div>
      <span className='skill' style={style}>
        {props.name} {props.emoji}
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
