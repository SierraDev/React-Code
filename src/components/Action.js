import React from 'react';

const Action = (props) => (
        <div>
            <button className="big-button"onClick={props.handlePick}
                disabled={!props.hasOptions}>
                Take the Wheel, App!
                </button>
        </div>
    )

export default Action;