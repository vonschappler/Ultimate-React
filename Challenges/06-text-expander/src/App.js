import './styles.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science
        fiction,but believe it or not, space travel is a real thing. Humans and
        robots are constantly venturing out into the cosmos to uncover its
        secrets and push the boundaries of what's possible.
      </TextExpander>
      <br />
      <hr />
      <br />
      <TextExpander
        collapsedNumWords={20}
        expandButtonText=' Show text'
        collapseButtonText=' Collapse text'
        buttonColor='#ff6622'
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>
      <br />
      <hr />
      <br />
      <TextExpander expanded={true} className='box'>
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

TextExpander.propTypes = {
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
};

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = ' Show more...',
  collapseButtonText = ' Show less...',
  buttonColor = 'blue',
  expanded = false,
  className = '',
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  function handleCollapsed() {
    setIsExpanded((curr) => !curr);
  }
  return (
    <div className={className}>
      <span>
        {!isExpanded
          ? `${children
              .split(' ')
              .filter((word, index) =>
                index <= collapsedNumWords ? word : ''
              )}...`
          : children}
      </span>
      <span
        role='button'
        style={{ color: buttonColor }}
        onClick={handleCollapsed}
      >
        {!isExpanded ? expandButtonText : collapseButtonText}
      </span>
    </div>
  );
}
