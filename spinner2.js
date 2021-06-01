const miliseconds = 100

const anim = ['|   ', '/   ', '-   ', '\\   ']
const animFullCycle = anim.concat(anim).concat(['|   ', '\n'])

for (let index = 0; index < animFullCycle.length; index++) {
  setTimeout( () => {
    process.stdout.write(`\r${animFullCycle[index]}`);
  }, miliseconds + index * 200);
}