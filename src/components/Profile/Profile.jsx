import styles from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={styles.profile}>
            <div className={styles['profile-header']}>
                <img className={styles.img} src={image} alt="User avatar" />
                <p className={styles['p-name']}>{name}</p>
                <p className={styles['p-tag']}>@{tag}</p>
                <p className={styles['p-location']}>{location}</p>
            </div>
            <ul className={styles['list-prof']}>
                <li className={styles['li-prof']}>
                    <span className={styles['span-one']}>Followers:</span>
                    <span className={styles['span-two']}>{stats.followers}</span>
                </li>
                <li className={styles['li-prof']}>
                    <span className={styles['span-one']}>Views:</span>
                    <span className={styles['span-two']}>{stats.views}</span>
                </li>
                <li className={styles['li-prof']}>
                    <span className={styles['span-one']}>Likes:</span>
                    <span className={styles['span-two']}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
