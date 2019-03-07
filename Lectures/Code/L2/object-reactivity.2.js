const Observer = ({ target, listener }) => {
  let observable

  const set = (target, name, value) => {
    target[name] = value
    listener(observable)
    return true
  }

  const get = (target, name) => {
    return Object.freeze(target[name])
  }

  const handler = {
    set,
    get
  }

  observable = new Proxy(target, handler)

  return observable
}

const updater = state => {
  console.log('State has changed')
  console.dir(state)
}

const APP_STATE = {
}

const state = Observer({
  target: APP_STATE,
  listener: updater
})

state.name = 'aaa'
state.rrr = 'rrr'
console.log()

/*
const value = state.startValue
console.log(value)

state.startValue = 1
*/
