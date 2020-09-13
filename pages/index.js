import Router from 'next/router'
import Skeleton from '../components/Skeleton'
import P1 from '../components/P1.js'

export default function Index() {
	const handleClick = () => {
		Router.push('/test')
	}
	return (
		<>
			<Skeleton>
				<div className='left-wrap'>
					<div className='left'>
						<p>попробуй себя в профессиях будущего в кванториуме</p>
						<button onClick={handleClick}>
							Пройди 5 минутное тестирование
						</button>
					</div>
				</div>
				<div className='right'>
					<P1 />
				</div>
			</Skeleton>
		</>
	)
}
