const code_source = {
    sign_metamask: `// Check if MetaMask is installed
    if (typeof window.ethereum !== "undefined") {
      // Request access to the user's MetaMask accounts
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const account = accounts[0];
    
      // Message to be signed
      const message = "Hello, World!";
    
      // Sign the message using MetaMask
      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [message, account],
      });
    
      console.log("Signature:", signature);
    } else {
      console.error("MetaMask is not installed");
    }`,
    sign_wagmi: 
    ` try {
      //Get wallet client
      const walletClient: any = await getWalletClient();
      
      //Sign message 
      const signature = await walletClient?.signMessage({ message: signData.wagmiMessage });
    }
    catch (error) {
      console.error(error);
    }`
}

export default code_source