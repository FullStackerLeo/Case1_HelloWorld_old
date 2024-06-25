import { useState, createContext, ReactNode, FC, } from 'react';

// Define the context type
interface CountContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

// Create the context with a default value
export const CountContext = createContext<CountContextType | undefined>(undefined);

// Define the CountStore hook
export const useCountStore = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((currentCount) => currentCount + 1);
    const decrement = () => setCount((currentCount) => currentCount - 1);
    const reset = () => setCount(55);

    return { count, increment, decrement, reset };
};

// Define the CountProvider component
interface CountProviderProps {
    children: ReactNode;
}

const CountProvider: FC<CountProviderProps> = ({ children }) => {
    const countStore = useCountStore();
    return (
        <CountContext.Provider value={countStore}>
            {children}
        </CountContext.Provider>
    );
};

export default CountProvider;
