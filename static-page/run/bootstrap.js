if (!window.isSecureContext) {
  window.location.assign('../error/#security')
}

(async () => {

await new Promise(r => setTimeout(r, 500))

document.querySelector('#fadecontainer').className = 'fadein'


if ('serviceWorker' in navigator) {
  try {
  const registration = await navigator.serviceWorker.register('../worker.js', {scope: '../run'})
    console.log('Service Worker registration completed with scope: ', registration.scope)
    registration.addEventListener('updatefound', () => {
      console.log('update found')
    })
  } catch (error) {
    console.log('Service Worker registration failed', err)
  }
} else {
  console.log('Service Workers not supported')
}

const installationData = localStorage.getItem('orbit-iOS/data')
if (!installationData) {
  const installationData = {
    installedAsWorker: true
  }

  await new Promise(r => setTimeout(r, 5000))
  document.querySelector('#fadecontainer').className = 'fadeout'
  await new Promise(r => setTimeout(r, 1000))
  localStorage.setItem('orbit-iOS/data', installationData)
  location.reload()
  return
}

const params = new URLSearchParams(window.location.search)

if (!params.has('data')) {
  window.location.assign('../error/#empty')
}

let data = decodeURIComponent(params.get('data'))
data = data.replace(/ /g, '+')

try {
  data = atob(data)
} catch (e) {
  console.error(e)
  window.location.assign('../error/#encoding')
}


document.documentElement.innerHTML = data

})()