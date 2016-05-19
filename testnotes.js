Array.prototype.notes = function(){

};
describe('array input', function(){
	it('should be an array' ,  function()){
		expect([""].notes()).toBe([]);

	}
});
it('is should be able to search ',function(){
	search('string').done(function(result) {
        expect(result.length).toBeGreaterThan(1); //true
        console.log(result.lenght);
    });
});
it('Should create note', function(){
		expect(typeof list_content.id).toBeNumber();
	});
it('Should List Note', function(){
		expect(('Note ID: 1 /n Yatzee /n By Author').list()).toBetrue();
	});
it('Should get note_id',function(){
		expect((typeof note_id).get()).toBeNumber();
	});

});