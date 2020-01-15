
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
    for (let key in nums.items) {
    	keys.push(keys)
    }
    return keys
};

function romanos(N){
    var nums = { 1: "I", 2: "V", 10: "X", 50: "L" };
    console.log(nums);
    var resp = "";
    let n= N;
    var count = nums.length();
    console.log(count);
    let my_keys = get_keys(nums);
    
    while(n>0){
        
        if(my_keys[count]>n)
        {
            resp = resp + nums[count];
            n = n - my_keys[count];
        }
        else{
            count = count -1;
        }
    }
    return resp;
};

console.log(romanos(10));