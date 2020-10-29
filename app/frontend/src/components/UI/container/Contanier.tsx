import * as React from 'react';
import styles from "./Container.module.scss"

interface IProps extends React.HTMLAttributes<Element> {
}

const container = ({ children }: IProps) => (
    <div className={styles.container}>
        {children}
    </div>
)

export default container