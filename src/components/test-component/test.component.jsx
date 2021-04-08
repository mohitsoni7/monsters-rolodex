import React from 'react'

export const TestComponent = (props) => {
    console.log(props);
    return (
        <div>
            <h1>This is a Test Component</h1>
            <em>{props.children}</em>
        </div>
    )
}