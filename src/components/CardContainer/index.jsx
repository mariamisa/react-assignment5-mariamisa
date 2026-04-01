import Card from '../Card'

import styles from './styles.module.css'

export default function CardContainer({ data, handelFilterByTag }) {
	return (
		<div className={styles.containerCard}>
			{
				data?.map(el =>
					<Card
						key={el.id}
						item={el}
						handelFilterByTag={handelFilterByTag}
					/>)
			}
		</div>
	)
}
