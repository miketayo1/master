var NoteApplication = function(){
   this.author = author;
   this.list_content = {} 
	this.list_content.id = 0
	this.list_content.content = []
};
NoteApplication.prototype.create = function(note_content){
	 this.list_content.id += 1;
	 this.list_content.content.push(note_content)
};

NoteApplication.prototype.list = function(){
	console.log("note_id : " + this.list_content.id);
	this.list_content.content.forEach(function(item){
		console.log(item)
	});
	return "Author : " + this.author;
};

NoteApplication.prototype.get = function(note_id){
	for(var i = 0; i <= this.list_content.content.length; i++){
		if( i  === note_id){
			return this.list_content.content[i - 1]
		}; 
	};
};

NoteApplication.prototype.search = function(search_text){
	for(var i = 0; i < this.list_content.content.length; i++){
		if(search_text === this.list_content.content[i]){
	return "Showing result for the search " + '"' + this.list_content.content[i] + '"'
			console.log("Note ID : " + this.list_content.id)
			this.list_content.content.forEach(function(item){
				return item;
			});

			return "By Author : " + this.author
		};
	};
};

NoteApplication.prototype.delete = function(note_id){
    var j = this.list_content.content.length - 1
	for(var i = 0; i <= this.list_content.content.length - 1; i++){
	    j = i + 1
	   
		if(note_id === j){		    
			this.list_content.content.splice(i,1)
		};
	};
};

NoteApplication.prototype.edit = function(note_id,new_content){
	for(var i = 0; i < this.list_content.content.length; i++){
		if(note_id === i){
			this.list_content.content[i - 1] = new_content;
		};
	};
};