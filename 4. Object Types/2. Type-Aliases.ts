type User = {
    name_1: string;
    age_1: number;
    location_1: string
}

const printUserInfo = (user: User) => {
    return `Name: (${user.name_1}) Age: (${user.age_1}) Location: (${user.location_1})`
}

const showUser = printUserInfo({name_1: "Kimi", age_1: 18, location_1: "Italy"})
console.log(showUser);