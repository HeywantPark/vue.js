let student = {};
student.name = '홍길동';
student.hobby = '운동';
student.dream = '개발자';
student.address = '하남시';

student.toString = () => {
  for (let key in this) {
    if (key != 'toString') {
      console.log(key + '\t' + this[key]);
    }
  }
};

student.toString();
