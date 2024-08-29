import React from "react";
import style from './Botao.module.scss';

type BotaoProps = {
    texto?: string;
    type?: "button" | "submit" | "reset"; // Correct type declaration for the 'type' prop
};

class Botao extends React.Component<React.PropsWithChildren<BotaoProps>> {
    render() {
        const { type = "button", children } = this.props; // Destructure 'children' for better clarity
        return (
            <button type={type} className={style.botao}>
                {children}
            </button>
        );
    }
}

export default Botao;