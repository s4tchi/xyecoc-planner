import classNames from "classnames";
import { HTMLAttributes } from "react";

import styles from './input.module.scss'

export function Input({ className, ...props}:  HTMLAttributes<HTMLInputElement>) {
    return <input {...props} className={classNames(styles.input, className)}/>
}