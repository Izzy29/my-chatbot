import React from 'react';
import Link from 'next/link';

const Chatbot = () => {
    return (
        <div className="border border-gray-300 rounded-md p-4 max-w-md mx-auto mt-8">
            <div className="max-h-40 overflow-y-auto">
                <div className="bg-gray-200 rounded p-2 mb-2 w-3/4">Hello there!</div>
                <div className="bg-blue-200 rounded p-2 mb-2 w-3/4 self-end">Hi, how can I help you?</div>
            </div>
            <div className="flex">
                <input type="text" className="flex-1 p-2 border border-gray-300 rounded" placeholder="Type your message here" />
                <button className="bg-blue-500 text-white font-semibold px-4 rounded-l-none rounded border border-blue-500">Send</button>
            </div>
        </div>
    );
}

export default Chatbot;