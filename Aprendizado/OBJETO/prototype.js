if (!Array.prototype.unique) {
    Array.prototype.unique = function() {
        return [...new Set(this)];
    };
}

console.log([1, 2, 2, 3, 4, 4, 4, 5].unique());