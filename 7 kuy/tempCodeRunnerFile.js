const obj = {
  doSmth: function () {
    console.log(this);
  },
};
const doSmthElse = obj.doSmth.bind(this);
doSmthElse();