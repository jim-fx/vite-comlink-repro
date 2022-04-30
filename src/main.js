const app = document.querySelector('#app')

const instance = new ComlinkWorker(new URL('./worker', import.meta.url), {/* normal Worker options*/ })
const result = await instance.add(2, 3)

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <b>Worker Result: ${result}</b>
`
