if ("serviceWorker" in navigator) {
  console.log('register service worker')
  navigator.serviceWorker.register("/service-worker.js");
}

const errcode = window.location.hash.slice(1)

const errMessages = {
  empty: {
    msg: 'no app information provided in app url\n',
    buttons: []
  },
  encoding: {
    msg: 'invalid app encoding\n\nif this is your app:',
    buttons: [{
      label: 'report issue',
      onclick: ev => {
        open('https://github.com/dinguskhan0/orbit-ios/issues', '_blank')
      }
    }]
  },
  meta: {
    msg: 'no app metadata found',
    buttons: [{
      label: 'report issue',
      onclick: ev => {
        open('https://github.com/dinguskhan0/orbit-ios/issues', '_blank')
      }
    }]
  },
  security: {
    msg: 'fatal security issue:<br>window is not a secure context<br><br>please report an issue, as this is not normal',
    buttons: [{
      label: 'report issue',
      onclick: ev => {
        open('https://github.com/dinguskhan0/orbit-ios/issues', '_blank')
      }
    }]
  }
}

const box = document.querySelector('.center-container')
const errtext = document.querySelector('.center-container > span')

if (errcode in errMessages) {
  errtext.innerHTML = errMessages[errcode].msg.replace(/\n/g, '<br>')
  if (errMessages[errcode].buttons) {
    document.querySelectorAll('.center-container > button').forEach(v => v.remove())
    errMessages[errcode].buttons.forEach(opts => {
      const btn = document.createElement('button')
      btn.innerText = opts.label
      btn.onclick = opts.onclick
      box.appendChild(btn)
    })
  }
}