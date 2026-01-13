import React, { useEffect, useReducer, useState } from 'react'

function taskReducer(state, action) {
    switch (action.type) {
        case 'ADD': {
            const text = action.text.trim()
            if (!text) return state
            return [...state, { id: Date.now(), text, completed: false }]
        }
        case 'TOGGLE': {
            return state.map(t => (t.id === action.id ? { ...t, completed: !t.completed } : t))
        }
        case 'DELETE': {
            return state.filter(t => t.id !== action.id)
        }
        case 'CLEAR_COMPLETED': {
            return state.filter(t => !t.completed)
        }
        case 'EDIT': {
            const text = action.text.trim()
            if (!text) return state
            return state.map(t => (t.id === action.id ? { ...t, text } : t))
        }
        default:
            return state
    }
}

const init = () => {
    try {
        const stored = localStorage.getItem('tasks')
        return stored ? JSON.parse(stored) : []
    } catch {
        return []
    }
}

const Task = () => {
    const [tasks, dispatch] = useReducer(taskReducer, [], init)
    const [input, setInput] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [editingText, setEditingText] = useState('')

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: 'ADD', text: input })
        setInput('')
    }

    function startEdit(task) {
        setEditingId(task.id)
        setEditingText(task.text)
    }

    function saveEdit() {
        dispatch({ type: 'EDIT', id: editingId, text: editingText })
        setEditingId(null)
        setEditingText('')
    }

    const remaining = tasks.filter(t => !t.completed).length

    return (
        <div style={{ maxWidth: 520, margin: '24px auto', padding: 16 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Add a task"
                    style={{ flex: 1, padding: 8 }}
                />
                <button type="submit">Add</button>
            </form>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
                <span>{remaining} remaining</span>
                <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>Clear completed</button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, marginTop: 12 }}>
                {tasks.map(task => (
                    <li
                        key={task.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '8px 0',
                            borderBottom: '1px solid #eee',
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => dispatch({ type: 'TOGGLE', id: task.id })}
                        />

                        {editingId === task.id ? (
                            <input
                                style={{ flex: 1, padding: 6 }}
                                value={editingText}
                                onChange={e => setEditingText(e.target.value)}
                                autoFocus
                            />
                        ) : (
                            <span style={{ flex: 1, textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.text}
                            </span>
                        )}

                        {editingId === task.id ? (
                            <button onClick={saveEdit}>Save</button>
                        ) : (
                            <button onClick={() => startEdit(task)}>Edit</button>
                        )}
                        <button onClick={() => dispatch({ type: 'DELETE', id: task.id })}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Task

