import Tag from './Tag';

import styles from './styles.module.css';

export default function Tags({ tags, inFilter, handelClick, handelDeleteTag }) {

  return (
    <div className={styles.tags} style={inFilter && { borderTop: "none" }}>
      {tags?.map((tag) => {
        const [key, value] = Object.entries(tag)[0];
        return value?.map((el) =>
          <Tag
            key={`${key}${el}`}
            param={key}
            tag={el}
            inFilter={inFilter}
            handelClick={handelClick}
            handelDeleteTag={handelDeleteTag} />
        )
      }
      )}
    </div>

  );
}