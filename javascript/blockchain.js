var enderecoContrato = "0x692a70d2e424a56d2c6c27aa97d1a86395877b3a";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);
var nan = 0 / 0;
var eNaN = Number.isNaN(nan);
