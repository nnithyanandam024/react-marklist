import React, { useState } from "react";

const MarkEntry = () => {
    const [marks, setMarks] = useState(Array(5).fill(""));
    const [total, setTotal] = useState(0);
    const [average, setAverage] = useState(0);

    const handleMarksSubmit = (e) => {
        e.preventDefault();
        const totalMarks = marks.reduce((sum, mark) => sum + Number(mark), 0);
        const avgMarks = totalMarks / marks.length;

        setTotal(totalMarks);
        setAverage(avgMarks);
    };

    const updateMark = (index, value) => {
        const updatedMarks = [...marks];
        updatedMarks[index] = value;
        setMarks(updatedMarks);
    };

    return (
        <form onSubmit={handleMarksSubmit} style={formStyle}>
            <h1>Welcome user</h1>
            <h2>Enter Marks for 5 Subjects</h2>
            {marks.map((mark, index) => (
                <div key={index} style={inputGroup}>
                    <label>Subject {index + 1}:</label>
                    <input
                        type="number"
                        value={mark}
                        onChange={(e) => updateMark(index, e.target.value)}
                        min="0"
                        max="100"
                        required
                    />
                </div>
            ))}
            <button type="submit" style={buttonStyle}>
                Submit
            </button>

            {total > 0 && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Results</h3>
                    <p>Total Marks: {total}</p>
                    <p>Average Marks: {average.toFixed(2)}</p>
                </div>
            )}
        </form>
    );
};

export default MarkEntry;


const formStyle = {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
};

const inputGroup = {
    marginBottom: "15px",
};

const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};
