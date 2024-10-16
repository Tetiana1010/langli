import React from 'react';

enum UserRole {
    User = "USER",
    Bot = "BOT"
}

interface ChatMessage {
    message: string;
    user: UserRole;
    timestamp: number;
}

interface ChatPageProps {
    history: ChatMessage[];
}

export default function ChatPage({ history }: ChatPageProps) {
    const role = UserRole.User
    return (
        <div>
            <h1 className='text-red-300'>Chat Page</h1>
        </div>
    );
}