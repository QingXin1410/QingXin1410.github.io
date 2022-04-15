function init() {
	var getMoney = document.getElementById("btn");
	getMoney.onclick = inputMoneyUSD;
	var convertUSD = document.getElementById("convert");
	convertUSD.onclick = outputMoneyVND;
} 

function inputMoneyUSD() {
	var USD = prompt("Nhập số tiền USD: ");
	sessionStorage.USD = USD;
	var USDTextContent = document.getElementById("USDInputText");
	USDTextContent.textContent = sessionStorage.USD + " USD";
}

function outputMoneyVND() {
	var VND = sessionStorage.USD * 23000;
	var VNDTextContent = document.getElementById("USDOutputText");
	VNDTextContent.textContent = VND + " VND";
}

window.onload = init;
