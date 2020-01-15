class Dictionary {
  constructor () {
    this.items = {}
  }
  
    has (key) {
        returns this.items.hasOwnProperty(key)	
    }
  
  set (key, value) {
    this.items[key] = value
  }
  
  remove (key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }

    return false
  }
  
  get (key) {
    return this.has(key) ? this.items[key] : undefined
  }
  
  values () {
    const values = []
    for (let key in this.items) {
      if (this.has(key)) {
        values.push(this.items[key])
      }
    }
    return values
  }

  size () {
    return Object.keys(this.items).length
  }
  
  keys () {
    const keys = []
    for (let key in this.items) {
    	keys.push(keys)
    }
		return keys
    
    // La forma corta de hacer esto y abusando de las bondades de javascript
    // es así:
    // return Object.keys(this.items)
  }
  
  getItems () {
    return this.items
  }
}

const dict = new Dictionary()

dict.set('Gandalf', 'gandalf@email.com')
dict.set('John', 'johnsnowf@email.com')
dict.set('Tyrion', 'tyrion@email.com')

console.log(dict.has('Gandalf'))
console.log(dict.size())
console.log(dict.keys())
console.log(dict.values())
console.log(dict.get('Tyrion'))

console.log(dict.delete('John'))
console.log(dict.keys())
console.log(dict.values())
console.log(dict.getItems())