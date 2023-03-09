let n = 12345.4;
let lastdigit;
let ans = 0;
while (n != 0) {
  lastdigit = n % 10; //5,4,3,2,1
  ans = ans * 10 + lastdigit; //0+5=5,50+4=54,540+3=543,5430+2=5432,54320+1=54321/ans
  n = Math.floor(n / 10); // 1234,123,12,1,0/End
}
console.log(ans);
