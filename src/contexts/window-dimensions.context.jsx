import { createContext, useEffect, useState } from "react";

const getWindowDimensions = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
};

export const WindowDimensionsContext = createContext({
    windowDimensions: {},
    setWindowDimensions: () => {}
});

export const WindowDimensionsProvider = ({ children }) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const value = {
        windowDimensions, setWindowDimensions
    };

    return <WindowDimensionsContext.Provider value={value}>{children}</WindowDimensionsContext.Provider>
};