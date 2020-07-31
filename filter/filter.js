const pets = [
  {
	   nome:'rex',
	   type:'dog',
	   age:10
  },
  
  {
	  nome: 'miau',
	  type:'cat',
	  age:2
  },
  
  {
	  nome:'gulp',
	  type:'fish',
	  age:1
  }
]

const newPets = pets.filter((pet) =>{
	return pet.age < 5;
})

console.log(pets);
console.log(newPets);