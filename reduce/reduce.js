const pets = [
  {
	   nome:'rex',
	   type:'dog',
	   age:10,
	   weight:10
  },
  
  {
	  nome: 'miau',
	  type:'cat',
	  age:2,
	  weight:3
  },
  
  {
	  nome:'gulp',
	  type:'fish',
	  age:1,
	  weight:1
  },
  
  {
	  nome:'pe-de-pano',
	  type:'horse',
	  age:13,
	  weight:50
	  
  }
]

const totalWeight = pets.reduce((total, pet)=>{
	return total + pet.weight;
},0)

console.log(totalWeight);