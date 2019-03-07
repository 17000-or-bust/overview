let randomNumGen = (max, min) => {
	min = min || 0;
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

let address = () => {
	let addressNum = randomNumGen(777,1).toString();
	let streatName = ['Word Is Mine', 'Another', 'Break it', 'Testing this' ,'Will do', 'Code', 'Yup', 'Nope','Other', 'Beyond'];
	let stypeSt = ['Blv.','St','Ave', 'Alley'];
	let street = streatName[randomNumGen(streatName.length, 0)];
	let sttype = stypeSt[randomNumGen(stypeSt.length, 0)];
	return (addressNum).concat(' ',street,' ', sttype)
};
let crossSt = () => {
	let streatName = ['Word Is cross', 'Another cross', 'Cross it', 'AnotherCross this' ,'Will do Cross', 'Cross Code', 'Yup cross', 'Nope Cross','Other', 'Beyond Cross'];
	let stypeSt = ['Blv.','St','Ave', 'Alley'];
	let street = streatName[randomNumGen(streatName.length, 0)];
	let sttype = stypeSt[randomNumGen(stypeSt.length, 0)];

	return (street).concat(' ', sttype);
};
let Neigh = () => {
	let streatName = ['random Neigh', 'Another Neigh', 'Cross Neigh', 'no Neigh' ,'help Neigh', 'small Neigh', 'Yup Neigh', 'Nope Neigh','Other Neigh', 'Beyond Neigh'];

	return streatName[randomNumGen(streatName.length, 0)]
};
let eatHours = () => {
	let hr = randomNumGen(12,1);
	let hrTwo = randomNumGen(6,1);
	return `${hr}:00 am to ${hrTwo}:00 pm`;
};
let randWord = () => {
	let randWord = ['pay','coolpay','Meh', 'AnotherPay', 'CrossPay ', 'no' ,'help', 'small', 'Yup yup', 'Nope nope','Other', 'Beyond cool'];

	return randWord[randomNumGen(randWord.length, 0)];
};
let paymentOp = () => {
	return randWord() + ' ' + randWord() + ' ' + randWord();
};
let randomName = () => {
	let name = ['Bill','Mel','robert', 'Coo Man', 'Sr. Mel ', 'Alex' ,'Dav', 'Bern', 'Will', 'Jaz','Rose', 'Old Man'];

	return name[randomNumGen(name.length, 0)];
};

let phoneNumberGen =  () => {
	let areaCodes = ['650','415', '209', '831','442','925', '510', '707', '530' ];
	let randCode = areaCodes[randomNumGen(areaCodes.length,0)];
	let partOne = (randomNumGen(888,100).toString()).concat('-',randomNumGen(888,100).toString());
	return `(${randCode})${partOne}`;
};
let latitudeGen = () => {
	return  (Math.random()*180-90).toFixed(8);
};
let longitudeGen = () => {
	return (Math.random()*360-180).toFixed(8);
};
 console.log(longitudeGen());
module.exports = {
	address,
	crossSt,
	Neigh,
	eatHours,
	randWord,
	paymentOp,
	randomName,
	phoneNumberGen,
	latitudeGen,
	longitudeGen
};