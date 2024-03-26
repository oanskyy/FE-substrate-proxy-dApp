import "./App.css"
import WalletConnectComponent from "./components/WalletConnectComponent"

function App() {
	return (
		<div className='p-10'>
			<header className='flex flex-col items-center md:items-start md:flex-row md:justify-between gap-1 mt-5 mb-2'>
				<div className=''>
					<h2 className='text-2xl md:text-3xl font-bold'>Substrate Frontend</h2>
				</div>
				<div className='flex flex-col md:justify-self-end md:content-end md:items-end md:self-end mt-4 md:mt-0'>
					<WalletConnectComponent />
				</div>
			</header>
		</div>
	)
}

export default App
