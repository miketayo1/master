//sum of number in am array
Array.prototype.sum = function() {
	// body...
};
var arraysum = function(){
	var total =0;

	for (var i = 0; i< arr.length; i++) {
		total+=total +arr[i]; 
	}
	return total;
	if (typeof i != typeof 2){
		return NaN;
	}
	else{
		return total;
	}};

describe("sum of number ", function(){
	it("should return 10", function()){
		expect([1,2,3,4].sum()).toBe(10);
	
});
it('should return 0', function(){
	expect(arraysum([])).toBe(0)
});

it('should return nan', function(){
	expect(arraysum([1,2, 'Michael'])).toBeNaN()
});
});