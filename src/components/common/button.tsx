import * as React from 'react';

export enum ButtonTypes {
    Primary,
    Secondary,
    Floating
};

type ButtonProps = {
    onClick: Function;
} & React.ComponentProps<any>;

const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick}>{props.children}</button>
};

export default Button;