chrome.contextMenus.create({
  title: 'Speak Selection',
  contexts: ['selection'],
  id: 'speak-selection'
});

chrome.contextMenus.onClicked.addListener((e) => {
  fetch('http://localhost:5000/tts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'text': e.selectionText})
  })
});

const speakListener = (utterance, options, sendTtsEvent) => {
  sendTtsEvent({type: 'start', charIndex: 0})
  fetch('http://localhost:5000/tts', {
    method: 'POST',
    //mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'text': utterance})
  }).then(res => {
    sendTtsEvent({type: 'end', charIndex: utterance.length})
  }).catch(err => {
    sendTtsEvent({type: 'error'})
  })
};

const stopListener = () => {
  // (stop all speech)
};

chrome.ttsEngine.onSpeak.addListener(speakListener);
chrome.ttsEngine.onStop.addListener(stopListener);
