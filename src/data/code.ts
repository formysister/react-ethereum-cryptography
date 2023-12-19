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
    sign_hash_metamask: `// Check if MetaMask is installed
    if (typeof window.ethereum !== "undefined") {
      // Request access to the user's MetaMask accounts
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const account = accounts[0];
    
      // Message to be signed
      const message = "Hello, World!";
      // Message hash
      const messageHash = ethers.keccak256(ethers.toUtf8Bytes(message))

      // Sign the message using MetaMask
      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [messageHash, account],
      });
    
      console.log("Signature:", signature);
    } else {
      console.error("MetaMask is not installed");
    }`,
    sign_wagmi: 
    ` try {
      //Get wallet client
      const walletClient = await getWalletClient();

      // Message to be signed
      const message = "Hello, World!";

      //Sign message 
      const signature = await walletClient?.signMessage({ message });                                        
    }
    catch (error) {
      console.error(error);
    }`,
    sign_hash_wagmi: 
    ` try {
      //Get wallet client
      const walletClient = await getWalletClient();

      // Message to be signed
      const message = "Hello, World!";
      // Message hash
      const messageHash = ethers.keccak256(ethers.toUtf8Bytes(message))

      //Sign message 
      const signature = await walletClient?.signMessage({ message: { raw: messageHash } });    
    }
    catch (error) {
      console.error(error);
    }`,
    verify_ethers: 
    `try {
      // Message to verify
      const message = "Hello, World!";

      // Signature to verify
      const signature = "0x00..";
      
      const signer = await ethers.verifyMessage(message, signature);                                        
    }
    catch(error) {
      console.error(error);
    }`,
    verify_solidity: `// SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;
    
    contract MessageVerifier {
        function verifyMessage(
            bytes32 messageHash,
            bytes memory signature
        ) external pure returns (address) {
            require(signature.length == 65, "Invalid signature length");
    
            bytes32 r;
            bytes32 s;
            uint8 v;
    
            assembly {
                r := mload(add(signature, 0x20))
                s := mload(add(signature, 0x40))
                v := byte(0, mload(add(signature, 0x60)))
            }
    
            bytes memory prefix = "\x19Ethereum Signed Message:\n32";
            bytes32 prefixedHashMessage = keccak256(abi.encodePacked(prefix, messageHash));
            address signer =  address(ecrecover(prefixedHashMessage, v, r, s));
    
            return signer;
        }
    }`
}

export default code_source