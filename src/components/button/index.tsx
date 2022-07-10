import React, { ButtonHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from './styles'

type ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({props}) => (
    <Container>
        <Button  {...props} />
    </Container>
);

export default Button;
