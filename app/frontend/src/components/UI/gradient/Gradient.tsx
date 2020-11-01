import { motion } from 'framer-motion';
import * as React from 'react';
import styles from './Gradient.module.scss'

const gradientVariants = {
    initial: {
        y: -300
    },
    to: {
        y: 0,
        transition: {
            duration: 1.5,
            ease: "easeOut"
        }
    }
}

const Gradient = () => (
    <motion.div variants={gradientVariants}
        initial="initial"
        animate="to"
        className={styles.gradient_shadow}
    />)

export default Gradient;