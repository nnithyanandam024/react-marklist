import React, { useState } from "react";
import Login from "./pages/Login";
import MarkEntry from "./pages/MarkEntry";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            {!isAuthenticated ? (
                <Login setIsAuthenticated={setIsAuthenticated} />
            ) : (
                <MarkEntry />
            )}
        </div>
    );
};

export default App;
