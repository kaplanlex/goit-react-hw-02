import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <li key={friend.id} className={styles.friendItem}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
}

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={styles.friendCard}>
            <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
            <p className={styles.name}>{name}</p>
            <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
}
