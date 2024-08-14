import { configureStore } from "@reduxjs/toolkit";
import formReducer from './slice';

export default configureStore({
    reducer: {
        form: formReducer
    }
});