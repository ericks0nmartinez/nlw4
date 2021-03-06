import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from  '../style/components/Profile.module.css';

export function Profiler(){
const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ericks0nmartinez.png" alt="Profile" />
            <div>
                <strong>Erickson Martinez</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level { level }
                </p>
            </div>
        </div>
    )
}