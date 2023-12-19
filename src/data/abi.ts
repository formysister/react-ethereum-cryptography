const abi = {
    message_verifier: [
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "messageHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes",
                    "name": "signature",
                    "type": "bytes"
                }
            ],
            "name": "verifyMessage",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ]
}

export default abi