var enderecoContrato = "0x53C34f4897a4111f9299a9b734aD1d5c380a8Ce5";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);
