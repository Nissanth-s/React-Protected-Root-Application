import React from "react"

const Loader = (props) => {
    return (
        <div className="spinner">
            <div className="spinner-grow spinnerSub" role="status">
                <span className="sr-only">.</span>
            </div>
        </div>
    )
}

export default Loader;