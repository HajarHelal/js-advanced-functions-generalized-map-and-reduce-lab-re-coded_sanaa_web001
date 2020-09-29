function map(src,fun) {
  let r = []
  for (let i = 0; i < src.length; i++) {
    r.push( fun(src[i]))
  }
  return r;
}
