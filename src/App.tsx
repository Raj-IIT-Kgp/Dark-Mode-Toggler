import  { useState } from 'react';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
                <header className="p-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Dark Mode Toggler</h1>
                    <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        <span className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer dark:bg-gray-700"></span>
                    </label>
                </header>
                <main className="p-4">
                    <p>
                        Use the toggle above to switch between dark mode and normal mode.
                    </p>
                </main>
            </div>
        </div>
    );
}

export default App;

