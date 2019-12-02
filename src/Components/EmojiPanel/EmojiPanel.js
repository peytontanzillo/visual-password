import React from 'react';
import './EmojiPanel.css';

import emojis from '../../Data/EmojiList'

function EmojiPanel(props) {
  return (
    <p className="emoji-panel">
      {emojis}
    </p>
  );
}

export default EmojiPanel;
