
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
  let my_index = Object.keys(nums).length;
  let my_keys = Object.keys(nums);

    while(n>0){
      console.log('entra en bucle');
      if (my_keys[my_index]>=n)
        {
        console.log(my_index)
        resp = resp.concat(nums[my_index]);
        n = n - my_keys[my_index];
        }
        else{
          my_index = my_index - 1;
        }
    }
    return resp;
};

console.log(romanos(10));