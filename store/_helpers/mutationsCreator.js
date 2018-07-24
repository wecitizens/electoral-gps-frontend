export default function mutationsCreator (moduleName, childObjectPath = 'list') {
  moduleName = moduleName.toUpperCase()
  const requestAction = `${moduleName}_REQUEST`
  const successAction = `${moduleName}_SUCCESS`
  const failedAction = `${moduleName}_FAILED`
  const notFoundAction = `${moduleName}_NOT_FOUND`

  return {
    [requestAction] (state) {
      state.list.success = false
      state.list.loading = true
      state.list.message = ''
      state.list.error = null
    },
    [successAction] (state, mutation) {
      state.list.success = true
      state.list.loading = false
      state.list.message = mutation.payload.message
      state.list.data = mutation.payload.data
    },
    [failedAction] (state, mutation) {
      state.list.success = false
      state.list.loading = false
      state.list.error = mutation.payload.error
      state.list.message = mutation.payload.message
      console.error(`Error in ${moduleName}: ${mutation.payload.error}`)
    },
    [notFoundAction] (state, mutation) {
      console.log(mutation)
      state.list.success = false
      state.list.loading = false
      state.list.error = mutation.payload.error
      console.error(`Error in ${moduleName}: ${mutation.payload.error}`)
    }
  }
}
