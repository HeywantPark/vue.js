function addContact(
  name,
  mobile,
  home = '없음',
  address = '없음',
  email = '없음'
) {
  console.log(
    `name: ${name}, mobile: ${mobile}, home:${home}, address: ${address}, email: ${email}`
  );
}

addContact('홍길동', '010-3565-8459');
addContact('이몽룡', '010-2471-0953', '02-665-823', '서울시');
