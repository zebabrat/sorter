class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.comparator = (a,b) => a - b ;
  }

  add(element) {
    // your implementation
    return this.array.push(element);
  }

  at(index) {
    // your implementation
   return this.array[index];  
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
     return this.array
  }

  sort(indices) {
    // your implementation

    let filterArr = this.array.filter((el, i) => indices.includes(i)).sort(this.comparator);

    return this.array = this.array.map((el, i) => indices.includes(i) ? filterArr.shift() : el );
    
  }

  setComparator(compareFunction) {
    // your implementation
     return this.comparator = compareFunction;
  }
}

module.exports = Sorter;