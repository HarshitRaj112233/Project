import mainreducer from './Reducers/index'
import { createStore } from 'redux'
const store = createStore(mainreducer)
export default store