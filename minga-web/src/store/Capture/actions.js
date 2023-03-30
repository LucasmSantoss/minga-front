<<<<<<< HEAD

=======
>>>>>>> 9e5e0274f1cdcfbd46ff3edf48490baaa3ccd9f8
import { createAction } from "@reduxjs/toolkit";

let captureState = createAction(
    'captureState',
    ({ buttonState}) => {
        return {
            payload: { 
                checked: buttonState,
             }
        }
    }
)
const actions = { captureState }
export default actions