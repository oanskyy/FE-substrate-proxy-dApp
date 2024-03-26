import "./App.css"
import WalletConnectComponent from "./components/WalletConnectComponent"

function App() {
	return (
		<div className='p-10'>
			<header className=''>
				<h2 className='text-2xl md:text-3xl font-bold'>Substrate Frontend</h2>
				<WalletConnectComponent />
			</header>
		</div>
	)
}

export default App
