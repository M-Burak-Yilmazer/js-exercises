
let areAnagrams = (str1, str2) =>
  str1.toLowerCase().replaceAll(" ", "").split("").sort().join() ==
  str2.toLowerCase().replaceAll(" ", "").split("").sort().join();