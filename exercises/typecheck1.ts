// type UserTest = unknown;

// const users: unknown[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     }
// ];
interface IUserTest {
    name: string;
    age: number;
    occupation: string;
}

const users: IUserTest[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

// const logPersonTest = (user: unknown) => {
//     console.log(` - ${user.name}, ${user.age}`);
// }

// console.log('Users:');
// users.forEach(logPersonTest);

const logPersonTest = (user: IUserTest) => {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPersonTest);