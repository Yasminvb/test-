let name = "Miloud";
let skill = "Growth Hacking";
function sum1() {
  return `
                                    WALL OF FAME
        _|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|
        ___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__
        _|___|___|___|___|___|  ${name} : ${skill} |___|___|___|___|___|
        ___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__
        _|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|
    `;
}
const miloud = wallOfFame();
console.log(miloud);
name = "Johan";
skill = "Fixing Ubuntu";
const johan = wallOfFame();
console.log(johan);
name = "Danny";
skill = "Product Owning";
const danny = wallOfFame();
console.log(danny);

// Change the wall of fame function so it depends on its arguments
