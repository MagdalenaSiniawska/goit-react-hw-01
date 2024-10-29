import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.avatar}>
                <img src={image} alt='Avatar of the user' />
                <p className={styles.userName}>{name}</p>{' '}
                <p className={styles.userDetails}>@{tag}</p>{' '}
                <p className={styles.userDetails}>{location}</p>
            </div>
            <ul className={styles.userStatistics}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div> 
    );
};

export default Profile;
    