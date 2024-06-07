const Obj = {
  name: '박혜원',
  isOld: false,
  sayHello: function () {
    console.log(this.name);
  },
  nestedObj: {
    name: '민희진',
    isOld: true,
    sayHello: function () {
      console.log(this.name);
    },
  },
};

Obj.sayHello();
Obj.nestedObj.sayHello();
