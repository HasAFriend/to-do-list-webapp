'use client';
import React, { useState } from 'react';

// TEMPORARY CODE: copied from GFG as a placeholder; will refactor later
const App = () => {
    const [userInput, setUserInput] = useState('');
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null); // Track index of item to edit

    // Set a user input value
    const updateInput = (value) => {
        setUserInput(value);
    };

    // Add or edit item
    const handleAction = () => {
        if (userInput.trim() === '') return; // Avoid adding empty items

        if (editIndex !== null) {
            // Edit existing item
            const updatedList = list.map((item, index) =>
                index === editIndex ? { ...item, value: userInput } : item
            );
            setList(updatedList);
            setEditIndex(null); // Reset edit mode
        } else {
            // Add new item
            const newItem = {
                id: Math.random(), // Consider using a more reliable ID generator
                value: userInput,
            };
            setList([...list, newItem]);
        }

        setUserInput(''); // Clear input field
    };

    // Function to delete item from list using id to delete
    const deleteItem = (id) => {
        const updatedList = list.filter((item) => item.id !== id);
        setList(updatedList);
    };

    // Function to enable editing mode
    const startEdit = (index) => {
        setUserInput(list[index].value);
        setEditIndex(index); // Set the index of the item to be edited
    };
}

// Reference: https://www.geeksforgeeks.org/reactjs/how-to-create-todo-app-using-next-js/
// Initial code used as a reference for developing my own To-do list functionality