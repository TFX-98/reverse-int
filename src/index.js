module.exports = function reverse(n) {
    let d = n.toString().split('');
    d[0] == '-' ? d.splice(0,1) : '';
    d.reverse();
    n = d.join('');
    return +n;
}
