var Person=function(firstName,lastName)
{
	this.firstName=firstName;
	this.lastName=lastName;
}
var logPerson=function(Person)
{
	
	console.log(Person);
}
var hoa=new Person('hoa','le');//truyen doi tuong da duoc khoi tao truoc do vao trong tham so cua ham
logPerson(hoa);