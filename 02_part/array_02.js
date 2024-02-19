const marvel_heros=["thor", "iron man", "spider man"]
const dc_heros=["batman","superman","flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
const allHero=marvel_heros.concat(dc_heros)//instesd of concate we can use spread(...)
console.log(allHero)

const all_new_hero=[...marvel_heros,...dc_heros]
console.log(all_new_hero)

const another_array=[1,2,3,[4,5],7,[8,5,4,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

//checking wether the given element is array or not 
console.log(Array.isArray("Hardik"))
console.log(Array.from("Aman"))
console.log(Array.from({name:"hitesh"}))//intersting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))