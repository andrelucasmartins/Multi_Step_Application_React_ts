import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

import { v4 as uuidv4 } from "uuid";

interface StepContextProps {
  userData: string[];
  setUserData: Dispatch<SetStateAction<string[]>>;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  finalData: string[];
  setFinalData: Dispatch<SetStateAction<string[]>>;
  submitData: () => void;
}
export const StepContext = createContext<StepContextProps>({});

interface StepContextProviderProps {
  children: ReactNode;
}

export function StepContextProvider({ children }: StepContextProviderProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<string[]>([]);
  const [finalData, setFinalData] = useState<string[]>([]);

  function submitData() {
    setFinalData((finalData) => [...finalData, { ...userData, id: uuidv4() }]);
    setUserData([]);
  }

  return (
    <StepContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}
