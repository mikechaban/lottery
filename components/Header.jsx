import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div className="p-5 border-b-2 border-sky-800 flex flex-row">
            <h1 className="py-4 px-4 font-bold text-3xl text-sky-800">Decentralized Lottery</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton /* moralisAuth={false} -> shows it that we're not trying to connect to a server*/
                />
            </div>
        </div>
    )
}
