enum ActionTypes {
  LIBRARY_REFRESH = 'LIBRARY_REFRESH',
  REFRESH_CONFIG = 'REFRESH_CONFIG',

  FILTER_SEARCH = 'FILTER_SEARCH',

  PLAYER_START = 'PLAYER_START',
  PLAYER_TOGGLE = 'PLAYER_TOGGLE',
  PLAYER_PLAY = 'PLAYER_PLAY',
  PLAYER_PAUSE = 'PLAYER_PAUSE',
  PLAYER_STOP = 'PLAYER_STOP',
  PLAYER_NEXT = 'PLAYER_NEXT',
  PLAYER_PREVIOUS = 'PLAYER_PREVIOUS',
  PLAYER_JUMP_TO = 'PLAYER_JUMP_TO',

  PLAYER_SHUFFLE = 'PLAYER_SHUFFLE',
  PLAYER_REPEAT = 'PLAYER_REPEAT',

  QUEUE_START = 'QUEUE_START',
  QUEUE_CLEAR = 'QUEUE_CLEAR',
  QUEUE_REMOVE = 'QUEUE_REMOVE',
  QUEUE_ADD = 'QUEUE_ADD',
  QUEUE_ADD_NEXT = 'QUEUE_ADD_NEXT',
  QUEUE_SET_QUEUE = 'QUEUE_SET_QUEUE',

  LIBRARY_SORT = 'LIBRARY_SORT',
  LIBRARY_RESET = 'LIBRARY_RESET',
  LIBRARY_REFRESH_START = 'LIBRARY_REFRESH_START',
  LIBRARY_REFRESH_END = 'LIBRARY_REFRESH_END',
  LIBRARY_REFRESH_PROGRESS = 'LIBRARY_REFRESH_PROGRESS',
  LIBRARY_ADD_TRACKS = 'LIBRARY_ADD_TRACKS',
  LIBRARY_REMOVE_TRACKS = 'LIBRARY_REMOVE_TRACKS',
  LIBRARY_HIGHLIGHT_PLAYING_TRACK = 'LIBRARY_HIGHLIGHT_PLAYING_TRACK',

  PLAYLISTS_REFRESH = 'PLAYLISTS_REFRESH',
  PLAYLISTS_LOAD_ONE = 'PLAYLISTS_LOAD_ONE',
  PLAYLIST_REORDER_TRACKS = 'PLAYLIST_REORDER_TRACKS',

  TOAST_ADD = 'TOAST_ADD',
  TOAST_REMOVE = 'TOAST_REMOVE',

  SET_LIBRARY_LAYOUT = 'SET_LIBRARY_LAYOUT',

  NOTIFICATION_NEW = 'NOTIFICATION_NEW',
}

export default ActionTypes;
