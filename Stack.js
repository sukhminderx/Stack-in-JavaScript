//define the Stack class
function Stack() {
	this.stackData = [];
	this.topOfStack = 0;
	this.displayStack = displayStack;
	this.pushIntoStack = pushIntoStack;
	this.popFromStack = popFromStack;
	this.peekFromStack = peekFromStack;
	this.length = length;
	this.clearStack = clearStack;
}

//display the Stack
function displayStack(){
	return this.stackData;
}
//push an element to the top of the Stack
function pushIntoStack(elem) {
	this.stackData[this.topOfStack++] = elem;
}

//pop the top element from the Stack
function popFromStack() {
	var topElement = this.stackData[this.stackData.length-1];
	this.stackData.splice(this.stackData.length-1,1);
	return topElement;
}

//get the top element of the Stack
function peekFromStack() {
	return this.stackData[this.stackData.length-1];
}

//return the length of the Stack
function length() {
	return this.stackData.length;
}

//clear the Stack
function clearStack() {
	this.stackData = [];
	this.topOfStack = 0;
}