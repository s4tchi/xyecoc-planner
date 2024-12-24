import { HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./content.module.scss";

export function Content({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(styles.content, className)} {...props} />;
}
