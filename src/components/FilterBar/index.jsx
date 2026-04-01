import ShadowContainer from '../ShadowContainer'
import Tags from '../Tags'

import styles from './styles.module.css'

export default function FilterBar({ filterValues, handelClearFilter, handelDeleteTag }) {

	const tagsArray = Object.entries(filterValues).flatMap(([key, values]) =>
		values.map(value => ({ [key]: [value] }))
	);

	return (
		<ShadowContainer className={styles.filterBar}>
			<Tags tags={tagsArray} handelDeleteTag={handelDeleteTag} inFilter />
			<span onClick={handelClearFilter} className={styles.clearBtn}>Clear</span>
		</ShadowContainer>
	)
}
