export const LOADING_FINISHED = 'LOADING_FINISHED'

export function loadingFinished() {
  return {
    type: LOADING_FINISHED,
    loading: false,
  }
}