import styles from './styles.module.css'

export default function Label({ isVisible, label, className = "", ...rest }) {
	return (
		<>
			{isVisible && <div className={`${styles.tag} ${className}`} {...rest}><span>{label}</span></div>}
		</>
	)
}
