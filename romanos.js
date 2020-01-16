function romanos(N){
  var nums = { 1: "I", 5: "V", 9: "IX", 10: "X", 40:"XL", 50: "L" };
    var resp = "";
    let n= N;
  let my_index = Object.keys(nums).length;
  let my_keys = Object.keys(nums);

    while(n>0){
      if (my_keys[my_index]<=n)
        {
        nkey = my_keys[my_index];
        resp = resp.concat(nums[nkey]);
        n = n - my_keys[my_index];
        }
        else{
          my_index = my_index - 1;
        }
    }
    return resp;
};

console.log(romanos(45));