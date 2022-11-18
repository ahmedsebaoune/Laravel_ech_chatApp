import React from 'react';

const DangerButton = props => {
    return (
        <button {...props}
            className={`inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-600 disabled:opacity-25 transition ${props.className}`}
        >
            {props.children}
        </button>
    );
};
export default DangerButton;
