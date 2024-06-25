interface User  {
    name: string;
    surname: string;
    email: string;
    password: string;
}
const originalProfile: User ={
email: 'user@mail.com', 
password: 'password123',
name:'Suzi',
surname: 'Suzanna' 
} 

function createOrUpdateUser(initialValues: User, updates:Partial<User>) {
return {...initialValues, ...updates};
} 

const profile = createOrUpdateUser(originalProfile,{name:'Bob'}) 
//console.log(profile)
