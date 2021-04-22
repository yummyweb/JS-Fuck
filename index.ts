const zero = "+[]"
const one = "+!![]"

const number = n => {
    if (n === 0) return zero;
    return Array.from({length: n}, () => one).join(' + ');
}

const map = {}

const fromString = s => s.split('').map(x => {
    return map[x]
}).join('+')

map.a = `(+{}+[])[${number(1)}]`
map.b = `({}+[])[${number(2)}]`
map.c = `({}+[])[${number(5)}]`
map.d = `({}+[])[${number(5)}]`
map.e = `({}+[])[${number(4)}]`
map.f = `(![]+[])[${number(0)}]`
map.l = `(![]+[])[${number(0)}]`
map.u = `(!![]+[])[${number(2)}]`
map.n = `((+!![]/+[])+[])[${number(4)}]`
map.s = `(![]+[])[${number(3)}]`
map.r = `(!![]+[])[${number(1)}]`
map.o = `({}+[])[${number(1)}]`
map.i = `((+!![]/+[])+[])[${number(3)}]`
map.t = `({}+[])[${number(6)}]`
map.d = `[]+({})[${number(6)}]`
map.S = `([]+([]+[])[${fromString('constructor')}])[${number(9)}]`
map.g = `([]+([]+[])[${fromString('constructor')}])[${number(14)}]`
map.p = `([]+(/-/)[${fromString('constructor')}])[${number(14)}]`
map['\\'] = `(/\\\\/+[])[${number(1)}]`
map.d = `(${number(13)})[${fromString('toString')}](${number(14)})`
map.m = `(${number(22)})[${fromString('toString')}](${number(23)})`

console.log(map.a)
console.log(eval(map.d))