import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root.tsx';

const App: FC<any> = () => {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;