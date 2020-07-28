let cache = {};

function Cache(n) {
    if (n in cache) {
        return cache[n];
    }else{
        cache[n] = n + 80;
        return cache[n]
    }
}

console.log(Cache(60));
