import { ReactNode } from "react";

export interface ImbriagatorProps {
    children: ReactNode;
    imbriagate: boolean;
    className?: string;
    duration: number;
}