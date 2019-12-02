import React, {useContext} from 'react'

import PasswordContext from '../Contexts/PasswordContext'

const emojiStyle = {
  fontSize: "30px",
}

const EMOJI_TAGS = {
  "smileOpen": "😀",
  "smileClosed": "🙂",
  "wink": "😉",
  "fear": "😨",
  "meh": "😐",
  "rollingEyes": "🙄",
  "smile": "😀",
  "sleep": "😴",
  "nerd": "🤓",
  "frown": "🙁",
  "tired": "😞",
  "mad": "😡",
  "sick": "🤢",
  "man": "👨",
  "woman": "👩",
  "boy": "👦",
  "girl": "👧",
  "baby": "👶",
  "heart": "❤️",
  "cryLaugh": "😂",
  "plead": "🥺",
  "fire": "🔥",
  "thumbsUp": "👍",
  "thumbsDown": "👎",
}

const Emoji = ({
  name
}) => {
  const password = useContext(PasswordContext)
  return (
    <span role="img" aria-label="emoji" style={emojiStyle} onClick={() => password.setEmoji(EMOJI_TAGS[name])}>     {EMOJI_TAGS[name]}
    </span>
  );
}

const ALL_EMOJIS = []
for (let key in EMOJI_TAGS) {
  ALL_EMOJIS.push(key)
}

const createListFromEmojis = (emojiNames) => {
  const result = []
  for (const emojiName of emojiNames) {
    const selectedEmoji = EMOJI_TAGS[emojiName]
    if (selectedEmoji) {
      result.push(<Emoji key={result.length} name={emojiName}/>)
    } else {
      console.log(`Emoji of name ${emojiName} does not exist.`)
    }
  }
  return result
}

const emojis = createListFromEmojis(ALL_EMOJIS);

export default emojis;
