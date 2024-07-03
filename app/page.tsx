import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'

// Initialize the agent on application start.
const fpPromise = FingerprintJS.load({
  apiKey: "5nQjqzubLI9YM7EkaY6X"
})

// Get the visitorId when you need it.
fpPromise
  .then(fp => fp.get())
  .then(result => console.log(result.visitorId))