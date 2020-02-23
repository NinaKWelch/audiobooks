import audiobookService from '../services/audiobook'

const trackReducer = (state = null, action) => {
  // console.log('ACTION:', action)

  switch (action.type) {
    case 'INIT_TRACK':
      if (!action.data) {
        return null
      }
      return action.data
    default:
      return state
  }
}

export const initializeTrack = (audiobookId, sectionId) => {
  return async dispatch => {
    const audiobook = await audiobookService.getOne(audiobookId)
    // eslint-disable-next-line eqeqeq
    const track = audiobook.tracks.find(t => t.section.id == sectionId)
    dispatch({
      type: 'INIT_TRACK',
      data: track
    })
  }
}

export default trackReducer
