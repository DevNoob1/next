import React from 'react';
import './globals.css';

export default function Modal({ isOpen, closeModal, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <button
                    onClick={closeModal}
                    className="modal-button"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
