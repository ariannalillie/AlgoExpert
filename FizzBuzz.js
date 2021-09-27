// Part of a hackerEarth technical interview

const getInput = () => new Promise(resolve => {
    let input = ''
    process.stdin.on('data', (data) => input += data);
    process.stdin.on('end', () => {
        resolve(input)
    })
})

async function fizzBuzz () {

    const input = await getInput()
    let happyFace = input.split('\n');
    let array = (happyFace[1].split(' '))
    array.forEach(smile => {
        for (let i = 1; i <= smile; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log('Fizz');
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log('Buzz')
        } else if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz')
        } else {
            console.log(i)
        }
    }
    })

}

fizzBuzz()
