import * as React from 'react';
import styles from "./Container.module.scss"

interface IProps extends React.HTMLAttributes<Element> {
}

const Container = ({ children }: IProps) => (
    <div className={styles.container}>
        {children}
    </div>
)

export default Container