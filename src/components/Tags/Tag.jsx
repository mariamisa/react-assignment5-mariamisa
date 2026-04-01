import { removeIcon } from '../../../images'

import styles from './styles.module.css';

export default function Tag({ tag, param, inFilter = false, handelClick, handelDeleteTag }) {

	return (
		<div className={`${styles.tagContainer} ${inFilter && styles.tagContainerInFilter}`} >
			<span
				className={styles.tag}
				onClick={() => handelClick({ [param]: tag })}>
				{tag}
			</span>

			{inFilter &&
				<span
					className={styles.delete}
					onClick={() => handelDeleteTag({ [param]: tag })}>
					<img src={removeIcon} alt='remove icon' />
				</span>}
		</div>
	);
}