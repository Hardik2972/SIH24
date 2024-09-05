import React, { useState } from 'react';

const AdminMuseumForm = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        setImage(event.target.files[0]);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setImage(event.dataTransfer.files[0]);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div style={{
            width: '300px', 
            margin: '20px auto', 
            padding: '20px', 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            backgroundColor: '#f9f9f9'
        }}>
            <h2>Admin Museum Form</h2>
            <form>
                {/* Museum Name */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name">Museum Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter museum name"
                        style={{
                            width: '100%', 
                            padding: '8px', 
                            border: '1px solid #ccc', 
                            borderRadius: '4px'
                        }}
                        required
                    />
                </div>

                {/* Image Upload (Drag and Drop or Click) */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="image">Museum Image:</label>
                    <div
                        style={{
                            border: '2px dashed #ccc',
                            borderRadius: '4px',
                            padding: '20px',
                            textAlign: 'center',
                            color: '#666',
                            cursor: 'pointer',
                        }}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onClick={() => document.getElementById('image').click()}
                    >
                        {image ? `Selected: ${image.name}` : 'Drag & drop an image here or click to select'}
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageUpload}
                        />
                    </div>
                </div>

                {/* Ticket Price */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="ticketPrice">Ticket Price:</label>
                    <input
                        type="number"
                        id="ticketPrice"
                        name="ticketPrice"
                        placeholder="Enter ticket price"
                        style={{
                            width: '100%', 
                            padding: '8px', 
                            border: '1px solid #ccc', 
                            borderRadius: '4px'
                        }}
                        required
                    />
                </div>

                {/* Offers */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="offers">Offers:</label>
                    <input
                        type="text"
                        id="offers"
                        name="offers"
                        placeholder="Enter offers"
                        style={{
                            width: '100%', 
                            padding: '8px', 
                            border: '1px solid #ccc', 
                            borderRadius: '4px'
                        }}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        padding: '10px 15px', 
                        backgroundColor: '#007bff', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer'
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AdminMuseumForm;
