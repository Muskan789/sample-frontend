import store from '../redux/store'

export function LoadingTrue() {
    store.dispatch({ type: 'LOADING_STATE', payload: [true] })

}
export function LoadingFalse() {
    store.dispatch({ type: 'LOADING_STATE', payload: [false] })

}