import React, { useEffect, useState } from 'react';
import styles from '../styles/LoadingBar.module.css';
import BackgroundAnimation from './BackgroundAnimation';

const stages = [
	{ message: 'Fetching details...', duration: 5000 },
	{ message: 'Loading Images/Videos...', duration: 5000 },
	{ message: 'Fetching Images/Videos...', duration: 6000 },
	{ message: 'Backup Completed! Now you can close this tab.', duration: 6000 },
];

const LoadingBar: React.FC = () => {
	const [progress, setProgress] = useState(0);
	const [stage, setStage] = useState(0);

	useEffect(() => {
		if (stage < stages.length) {
			setProgress(((stage + 1) / stages.length) * 100);
			const timer = setTimeout(
				() => setStage(stage + 1),
				stages[stage].duration
			);
			return () => clearTimeout(timer);
		}
	}, [stage]);

	return (
		<div className={styles.loadingBarContainer}>
			<div className={styles['loading-bar']}>
				<div
					className={styles.progress}
					style={{
						width: `${progress}%`,
						height: '100%',
						background: 'linear-gradient(90deg, #00f, #00aaff, #00f)',
						borderRadius: '4px',
						transition: 'width 0.7s cubic-bezier(.4,2,.6,1)',
					}}
				/>
			</div>
			<span className={styles['loading-text']}>
				{stages[Math.min(stage, stages.length - 1)].message}
			</span>
			<BackgroundAnimation />
		</div>
	);
};

export default LoadingBar;