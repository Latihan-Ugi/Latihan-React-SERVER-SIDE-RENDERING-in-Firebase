import React from 'react';

function App(props) {
    const facts = props.facts.map((facts, i) => {
        return <li key={i}>{facts.name}</li>
    })
    return (
        <ul>
            {facts}
        </ul>
    )
}

export default App;