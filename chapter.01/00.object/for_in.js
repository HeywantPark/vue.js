const Obj = {
  name: '이효석',
  isOld: true,
  conditio: 'good',
};
for (let key in Obj) {
  console.log(`key 값은 ${key} 이고, value ${Obj[key]}`);
}
