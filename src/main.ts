const app = document.querySelector<HTMLDivElement>('#app')!

const instance = new ComlinkWorker<typeof import('./worker')>(new URL('./worker', import.meta.url), {/* normal Worker options*/ })
const result = await instance.add(2, 3)

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <b>Worker Result: ${result}</b>
`
