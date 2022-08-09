
const ConnectToWallet = ({ setAccounts, account }) => {

    const connectWallet = async () => {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccounts(accounts[0]);
    }

    return (
        <div>
            <button className="metaConnect" onClick={() => { connectWallet() }}>connect to MetaMask</button>
            <div className="userInfo">주소: {account}</div>
        </div>
    );
};

export default ConnectToWallet;