import {createSlice} from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: 'root',
    initialState:{
      isbn: "ISBN",
      title: "Title",
      author: "Author",
      length: "Length",
      binding: "Binding"

    },
    reducers:{
        chooseISBN: (state, action)=>{ state.isbn = action.payload},
        chooseTitle: (state, action)=>{ state.title = action.payload},
        chooseAuthor: (state, action)=>{ state.author = action.payload},
        chooseLength: (state, action)=>{ state.length = action.payload},
        chooseBinding: (state, action)=>{ state.binding = action.payload},

    }
})

export const reducer = rootSlice.reducer;
export const {chooseISBN, chooseTitle, chooseAuthor, chooseLength, chooseBinding} = rootSlice.actions