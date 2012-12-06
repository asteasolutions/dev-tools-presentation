//printValueOnlyProperties(document.body.style)
function printValueOnlyProperties(obj) {
  console.log(obj);

  Object.keys(obj).forEach(function (item) {
    var value = obj[item];
    if (value !== undefined && value !== null && value !== '') {
      console.log(item, ':', value);
    }
  });
}
