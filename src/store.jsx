import { configureStore } from '@reduxjs/toolkit'
import boardsSlice from './redux/boardsSlice'
import themeSlice from './redux/themeSlice'

export default configureStore({
  reducer: {
    boards: boardsSlice.reducer,
    theme: themeSlice.reducer
  },
})