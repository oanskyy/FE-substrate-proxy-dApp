import { web3Accounts, web3Enable } from "@polkadot/extension-dapp"

export async function connectWallet(): Promise<string[]> {
	try {
		// Enable the PolkadotJS extension
		// returns an array of all the injected sources
		// (this needs to be called first, before other requests)
		// this call fires up the authorization popup
		const extensions = await web3Enable("Oana's dApp")

		if (extensions.length === 0) {
			// no extension installed, or the user did not accept the authorization
			throw new Error(
				"PolkadotJS extension is not installed or authorization denied. For installation, please visit [PolkadotJS extension](https://polkadot.js.org/extension/)."
			)
		}

		const allAccounts = await web3Accounts()

		// Extract addresses from the accounts
		const addresses = allAccounts.map(account => account.address)

		return addresses
	} catch (error) {
		console.error("Error connecting wallet:", error)
		throw error
	}
}

// https://polkadot.js.org/docs/extension/usage
// This file contains the logic for connecting the wallet using the PolkadotJS extension.
