/*
a function to generate random numbers between a minimum and a maximum defined by you.
if a minimum number is not informed the minimum will be 0, returning a random value between MIN and MAX
*/

module.exports = (min, max) => {
    if(!max) {
        max = min
        min = 0
    }
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min
}
