import React from 'react'
import styles from './styles.module.css'

export default function ShadowContainer({ children, className = "", ...rest }) {
	return (
		<div className={`${styles.shadowBox} ${className}`} {...rest}>
			{children}
		</div>
	)
}
