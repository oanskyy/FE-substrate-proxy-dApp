import React, { useState } from "react"
import { connectWallet } from "../utils/walletConnection"

const WalletConnectComponent: React.FC = () => {
	const [connectedAddresses, setConnectedAddresses] = useState<string[]>([])
	const [selectedAddress, setSelectedAddress] = useState<string | null>(null)
	const [showSidebar, setShowSidebar] = useState(false)

	const handleConnectWallet = async () => {
		try {
			const addresses = await connectWallet()
			setConnectedAddresses(addresses)
		} catch (error) {
			console.error("Error connecting wallet:", error)
		}
	}

	const handleAddressSelect = (address: string) => {
		setSelectedAddress(address)
	}

	const toggleSidebarAndConnectWallet = () => {
		handleConnectWallet()
		setShowSidebar(!showSidebar)
	}

	return (
		<>
			{showSidebar ? (
				<button
					className='flex text-xl items-center cursor-pointer fixed right-8 top-4 z-50'
					onClick={() => setShowSidebar(!showSidebar)}
				>
					x
				</button>
			) : (
				<button
					onClick={toggleSidebarAndConnectWallet}
					className='z-30 flex cursor-pointer self-center md:self-end w-fit text-sm rounded-full bg-talisman-green hover:opacity-75 ease-in-out text-talisman-grey-2 px-5 py-2'
				>
					Connect Wallet
				</button>
			)}
			<div className='flex flex-col'>
				{showSidebar && (
					<div
						className='fixed top-0 right-0 w-full h-full 
						bg-talisman-dim bg-opacity-25 backdrop-blur-md '
						onClick={() => setShowSidebar(false)}
					></div>
				)}
				<div
					className={`top-0 right-0 w-full md:w-min lg:w-[32vw] p-8 bg-talisman-sidebar text-white fixed h-full z-40 ease-in-out duration-300 ${
						showSidebar ? "translate-x-0 " : "translate-x-full"
					}`}
				>
					{connectedAddresses.length > 0 && (
						<div className='mt-4 '>
							<h4 className='text-2xl lg:text-3xl font-semibold'>
								Connected addresses
							</h4>
							<p className='text-sm mt-4 text-talisman-grey-1'>
								Select the address
							</p>
							<ul>
								{connectedAddresses.map((address, index) => (
									<li
										key={index}
										className={`cursor-pointer text-md px-3.5 py-3 rounded-lg mt-2 bg-talisman-li ${
											selectedAddress === address ? "font-bold" : ""
										}`}
										onClick={() => handleAddressSelect(address)}
									>
										{`${address.slice(0, 9)}...${address.slice(-9)}`}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default WalletConnectComponent
