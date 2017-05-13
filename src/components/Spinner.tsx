import React, {ReactNode} from 'react';

type storrelseType = "liten" | "medium" | "stor"

interface SpinnerProps {
    laster: boolean;
    storrelse?: storrelseType;
    children?: ReactNode;
}


const getFontsize = (storrelse?: storrelseType): string => {
    switch(storrelse) {
        case "stor":
            return "60px";
        case "medium":
            return "40px";
        case "liten":
        default:
            return "26px";
    }
};

export const Spinner = (props: SpinnerProps) => {
    if(props.laster) {
        const fontSize = getFontsize(props.storrelse);
        return (
            <div className="text-center">
                <div className="fa fa-spinner fa-spin" style={{ fontSize }}/>
            </div>
        );
    }
    return <div>{props.children}</div>
};

export default Spinner;
