import ShadowContainer from '../ShadowContainer';
import Dot from './Dot';
import Tags from '../Tags';
import Label from './Label';

import * as images from '../../../images';

import styles from './styles.module.css';

export default function Card({ item, handelFilterByTag }) {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages = [],
    tools = []
  } = item;

  const logoImage = images[logo.split("/")[2]?.split(".")?.[0]];

  const tags = [{ role: [role] }, { level: [level] }, { languages }, { tools }];

  return (
    <ShadowContainer >
      <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
        <div className={styles.left}>
          <img src={logoImage} alt={company} className={styles.logo} />

          <div>
            <div className={styles.header}>
              <span className={styles.company}>{company}</span>
              <Label isVisible={isNew} className={styles.new} label="NEW!" />
              <Label isVisible={featured} className={styles.featuredBadge} label="FEATURED" />
            </div>

            <h2 className={styles.position}>{position}</h2>

            <div className={styles.info}>
              <span>{postedAt}</span>
              <Dot />
              <span>{contract}</span>
              <Dot />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <Tags tags={tags} handelClick={handelFilterByTag} />

      </div>

    </ShadowContainer>
  );
}