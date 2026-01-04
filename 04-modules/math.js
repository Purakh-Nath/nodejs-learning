function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}


module.exports = {
    add,
    sub,
};
// Alternative way (using shorthand)
// exports.add = (a, b) => a + b;