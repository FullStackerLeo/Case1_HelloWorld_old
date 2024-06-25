import React, { useContext } from 'react';
import { CountContext } from './reactContext_';

const AppWithContext = () => {
    const context = useContext(CountContext);
    if (!context) {
        throw new Error('useContext must be used within a CountProvider');
    }
    const { count, increment, decrement, reset } = context;

    return (
        <div className="App">
            <div>Counter: {count}</div>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default AppWithContext;
