import React, { useState } from "react"
import { connectWallet } from "../utils/walletConnection"

const WalletConnectComponent: React.FC = () => {
	const [connectedAddresses, setConnectedAddresses] = useState<string[]>([])

	const handleConnectWallet = async () => {
		try {
			const addresses = await connectWallet()
			setConnectedAddresses(addresses)
		} catch (error) {
			console.error("Error connecting wallet:", error)
		}
	}

	return (
		<div>
			<button
				onClick={handleConnectWallet}
				className='rounded-full bg-talisman-green text-talisman-grey-2 text-sm px-2 py-0.5'
			>
				Connect Wallet
			</button>
			{connectedAddresses.length > 0 && (
				<div>
					<p>Connected addresses:</p>
					<ul>
						{connectedAddresses.map((address, index) => (
							<li key={index}>{address}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default WalletConnectComponent
