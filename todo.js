<todo>
	<h1>{greeting}</h1>
	<h3>TODO</h3>
	<ul>
		<li each={item, i in items}>{item}</li>
	</ul>
	<form onsubmit={handleSubmit}>
		<input>
		<button>Add #{items.length+1}</button>
	</form>

	<input onkeyup={saveGreeting}>

	this.greeting =''
	
	this.items = []
	handleSubmit = function(e) {
	  var input = e.target[0]
	  console.log(input)
	  this.items.push(input.value)
	  input.value=''
	}
	saveGreeting = function(e) {
		var input = e.target
		console.log(e.target, input.value)
		this.greeting = input.value
	}
</todo>