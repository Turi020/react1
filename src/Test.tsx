"use client"
import React, { useEffect, useState } from 'react'

type Props = {
    text: string;
}

type Comment = {
    id: number;
    name: string;
}

export default function Counter({ text }: Props) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        fetchComments();
    }, [])

    const fetchComments = async () => {
        try {
            const response = await fetch("https://682fa082f504aa3c70f49de5.mockapi.io/comments");
            if (!response.ok) {
                console.error("Fetch was unsuccessful!");
                return;
            }
            const data = await response.json();
            setComments(data);
        } catch (error) {
            console.error("An error has occurred:", error);
        }
    }

    return (
        <div style={{ backgroundColor: active ? "green" : "gray" }}>
            <h1>{text}</h1>
            <div>
                {comments?.map((comment: Comment) => (
                    <div key={comment.id}>
                        {comment.name}
                    </div>
                ))}
            </div>
            <button onClick={() => setActive(!active)}>Click me</button>
        </div>
    )
}
