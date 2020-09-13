import Logo from './logo.js'
import Link from 'next/link'

export default function Index({ children }) {
	return (
		<>
			<header className='App-header'>
				<Link href='/'>
					<a>
						<Logo className='App-logo' />
					</a>
				</Link>
				<div className='login'>
					<button>Зарегистрироваться</button>
					<button>Войти</button>
				</div>
			</header>
			<main>{children}</main>
		</>
	)
}
