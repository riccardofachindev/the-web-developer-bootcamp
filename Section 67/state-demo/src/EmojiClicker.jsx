import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: '🥳' }]);

    const addEmoji = () => {
        setEmojis(currentEmojis => [...currentEmojis, { id: uuid(), emoji: '🐮' }]);
    }

    const deleteEmoji = (id) => {
        setEmojis(currentEmojis => currentEmojis.filter(e => e.id !== id));
    }

    function allHearts() {
        setEmojis(currentEmojis => {
            return currentEmojis.map(e => {
                return { ...e, emoji: '💕' };
            })
        })
    }

    return (
        <>
            {emojis.map(e => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize: '4rem' }}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add emoji</button>
            <button onClick={allHearts}>Make all hearts</button>
        </>
    )
}