
function values (nums) {
    const values = [];
    for (let key in nums.items) {
      if (nums.has(key)) {
        values.push(nums.items[key])
      }
    }
    return values
  };

  function get_keys (nums) {
    const keys = []
    for (let key in nums) {
    	keys.push(key)
    }
    return keys
};

function romanos(N){
    var nums = { 1: "I", 5: "V", 10: "X", 50: "L" };
    console.log(nums);
    var resp = "";
    var n= N;
    var count = Object.keys(nums).length;
    var my_keys = get_keys(nums);

    console.log(my_keys)
    while(n>0){
        
        if(my_keys[count]>=n)
        {
            resp = resp + nums[n];
            n = n - my_keys[count];
        }
        else{
            count = count -1;
        }
    }
    return resp;
};

console.log("Res", romanos(5));