const Logger = (target) => {
  const loggingHandler = {
    get: function (target, name) {
      const value = target[name]
      console.log(`getting ${name}: ${value}`)
      return value
    },
    set: function (target, name, value) {
      console.log(`setting ${name}: ${value}`)
      target[name] = value
      return true
    }
  }

  return new Proxy(target, loggingHandler)
}

const STATE = {
  startValue: 0
}

const state = Logger(STATE)

const value = state.startValue
console.log(value)

state.startValue = 1
const newValue = state.startValue