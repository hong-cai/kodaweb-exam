import React from 'react'

export default function SingleBar(props) {
    return (
        <div className="progressbar">
            <span data-progress={props.bar.percentage} id={props.key} style="background:${props.bar.color}">
            </span>
        </div>
    )
}
