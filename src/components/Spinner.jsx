import React from 'react';

const getFontsize = (storrelse) => {
    switch (storrelse) {
        case "stor":
            return "60px";
        case "medium":
            return "40px";
        case "liten":
        default:
            return "26px";
    }
};

export const Spinner = (props) => {
    if (props.laster) {
        const fontSize = getFontsize(props.storrelse);
        return (
            <div className="text-center">
                <div className="fa fa-spinner fa-spin" style={{ fontSize }}/>
            </div>
        );
    }
    return <div>{props.children}</div>;
};

export default Spinner;
