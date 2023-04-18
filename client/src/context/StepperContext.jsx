import { createContext, useReducer } from 'react';
import { FormReducer, initialState } from "../reducers/FormReducer"
import { Types } from '../constants/ReducerTypes';

export const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
    const [stepper, dispatch] = useReducer(FormReducer, initialState)

    const handleDecrease = () => {
      dispatch({ type: Types['DECREASE_STEP'] })
    }
  
    const handleIncrease = () => {
      dispatch({ type: Types['INCREASE_STEP'] })
    }

    const handleDemographics = (data) => {
      dispatch({ type: Types['SET_DEMOGRAPHICS'], payload: data})
    }

    const handlePlan = (variant) => {
      dispatch({ type: Types['SET_PLAN'], payload: { plan: variant } })
    }

    const handleBilling = (variant) => {
      dispatch({ type: Types['SET_BILLING'], payload: { billing: variant } })
    }

    const handleAddon = (isActive, variant) => {
      isActive ? 
      dispatch({ type: Types['REMOVE_ADDON'], payload: { addons: variant } }) :
      dispatch({ type: Types['SET_ADDON'], payload: { addons: variant } })
    }

    const stepperContext = { stepper, handleDemographics, handleDecrease, handleIncrease, handlePlan, handleBilling, handleAddon }


    return <StepperContext.Provider value={stepperContext}>{children}</StepperContext.Provider>;
}
 