import Skeleton from '../components/Skeleton.js'
import classes from '../public/css/test.module.css'

export default function Test() {
	return (
		<Skeleton>
			<div className={classes.root}>
				<p className={classes.text}>
					прежде, чем начать обучение в кванториуме, тебе нужно пройти тест.
				</p>
				<div className={classes.buttons}>
					<button className={classes.yes} onClick={() => {}}>
						Да, с радостью
					</button>
					<button className={classes.no} onClick={() => {}}>
						Я уже опредилился с направлением
					</button>
				</div>
			</div>
		</Skeleton>
	)
}
