function telephoneCheck(str) {
  // Good luck!
  var result = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/gm;
  return result.test(str);
}



telephoneCheck("555-555-5555");
