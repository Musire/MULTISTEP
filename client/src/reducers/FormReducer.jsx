export const FormReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DEMOGRAPHICS' : {
            return {
                ...state,
                step: state.step + 1,
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone
            }
        }
        case 'SET_PLAN' : {
            return {
                ...state,
                plan: action.payload.plan
            }
        }
        case 'SET_BILLING' : {
            return {
                ...state,
                billing: action.payload.billing
            }
        }
        case 'SET_ADDON' : {
            return {
                ...state,
                addons: new Set([...state.addons, action.payload.addons])
            }
        }
        case 'REMOVE_ADDON' : {
            
            return {
                ...state,
                addons: new Set([...state.addons].filter(a => a !== action.payload.addons))
            }
        }
        case 'INCREASE_STEP' : {
            return {
                ...state,
                step: state.step + 1
            }
        }
        case 'DECREASE_STEP' : {
            return {
                ...state,
                step: state.step - 1
            }
        }
    }

    throw Error('Unknown action: ' + action.type);
}

export const initialState = {
    step: 1,
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    billing: 'monthly',
    addons: new Set()
}
 
