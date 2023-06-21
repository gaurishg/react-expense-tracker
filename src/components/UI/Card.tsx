import { ReactNode } from "react";
import './Card.css';
interface Props{
    children: ReactNode;
    className?: string;
}

export default function Card({children, className}: Props) {
    return (<div className={"card " + (className??'')}>{children}</div>);
}