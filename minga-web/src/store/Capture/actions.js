import { createAction } from "@reduxjs/toolkit"


let captureState = createAction(
    'captureState',
    ({ buttonState, page }) => {
        return {
            payload: { 
                checked: buttonState,
             }

        }
    }
)
const actions = { captureState }
export default actions