if ("serviceWorker" in navigator) {
  console.log('register service worker')
  navigator.serviceWorker.register("./service-worker.js");
}

if (!window.isSecureContext) {
  window.location.assign('/error/#security')

}

// const params = new URLSearchParams(window.location.search)

// if (!params.has('data')) {
//   window.location.assign('/error/#empty')
// }

// let data = params.get('data')

// try {
//   data = atob(data)
// } catch {
//   window.location.assign('/error/#encoding')
// }

// let doc
// try {
//   doc = JSON.parse(data)
// } catch {}

// if (doc) {
//   console.log('use json app format')
// }
// else {
//   console.log('use bare html app')

//   doc = new DOMParser().parseFromString(data, 'text/html')
//   if (doc.querySelectorAll('orbit-meta').length > 0) {
//     console.log('found meta tags')
//   }
//   else if (doc.querySelector('title')) {
//     console.log('no meta tags, using title')
//   }
//   else {
//     window.location.assign('/error/#meta')
//   }
  
//   console.log(doc)
// }


// /* restrict access to the Storage API, Cache API, and IndexedDB */
// if (window.localStorage) {
//   const unsafeStorage = window.localStorage

//   class IsolatedStorage {
//     constructor() {
//       Object.defineProperties(this, {
//         length: {
//           set: undefined,
//           get: () => unsafeStorage.length,
//           configurable: false
//         }
//       })
//       Object.setPrototypeOf(this, null)
//     }
//   }

//   delete window.localStorage
//   window.localStorage = new IsolatedStorage()
// }