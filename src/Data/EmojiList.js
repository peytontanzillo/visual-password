import React from 'react'

const emojiStyle = {
  fontSize: "30px",
}

const EMOJI_TAGS = {
    "smileOpen": <span key={1} role="img" aria-label="emoji" style={emojiStyle}>😀</span>,
    "smileClosed": <span key={2} role="img" aria-label="emoji" style={emojiStyle}>🙂</span>,
    "wink": <span key={3} role="img" aria-label="emoji" style={emojiStyle}>😉</span>,
    "fear": <span key={4} role="img" aria-label="emoji" style={emojiStyle}>😨</span>,
    "meh": <span key={5} role="img" aria-label="emoji" style={emojiStyle}>😐</span>,
    "rollingEyes": <span key={6} role="img" aria-label="emoji" style={emojiStyle}>🙄</span>,
    "smile": <span key={7} role="img" aria-label="emoji" style={emojiStyle}>😀</span>,
    "sleep": <span key={8} role="img" aria-label="emoji" style={emojiStyle}>😴</span>,
    "nerd": <span key={9} role="img" aria-label="emoji" style={emojiStyle}>🤓</span>,
    "frown": <span key={10} role="img" aria-label="emoji" style={emojiStyle}>🙁</span>,
    "dissapointed": <span key={11} role="img" aria-label="emoji" style={emojiStyle}>😞</span>,
    "angry": <span key={12} role="img" aria-label="emoji" style={emojiStyle}>😡</span>,
    "sick": <span key={13} role="img" aria-label="emoji" style={emojiStyle}>🤢</span>,
    "man": <span key={14} role="img" aria-label="emoji" style={emojiStyle}>👨</span>,
    "woman": <span key={15} role="img" aria-label="emoji" style={emojiStyle}>👩</span>,
    "boy": <span key={16} role="img" aria-label="emoji" style={emojiStyle}>👦</span>,
    "girl": <span key={17} role="img" aria-label="emoji" style={emojiStyle}>👧</span>,
    "baby": <span key={18} role="img" aria-label="emoji" style={emojiStyle}>👶</span>,
    "heart": <span key={19} role="img" aria-label="emoji" style={emojiStyle}>❤️</span>,
    "cryLaugh": <span key={20} role="img" aria-label="emoji" style={emojiStyle}>😂</span>,
    "plead": <span key={21} role="img" aria-label="emoji" style={emojiStyle}>🥺</span>,
    "fire": <span key={22} role="img" aria-label="emoji" style={emojiStyle}>🔥</span>,
    "thumbsUp": <span key={23} role="img" aria-label="emoji" style={emojiStyle}>👍</span>,
    "thumbsDown": <span key={24} role="img" aria-label="emoji" style={emojiStyle}>👎</span>,
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
      result.push(EMOJI_TAGS[emojiName])
    } else {
      console.log(`Emoji of name ${emojiName} does not exist.`)
    }
  }
  return result
}

const emojis = createListFromEmojis(ALL_EMOJIS);

export default emojis;
