{
//

// Union Types
// type FrontendDeveloper = 'Junior Developer' | 'Mid-Level Developer';
// type FullStackDeveloper = 'FrontEnd Developer' | 'Expert Developer';

// type Developer = FrontendDeveloper | FullStackDeveloper;

// const newDeveloper : FrontendDeveloper = 'Junior Developer';

// type User = {
//     name: string;
//     age: number;
//     gender: 'Male' | 'Female';
//     bloodGroup: 'A+' | 'A-' | 'O+' | 'O-';
// }

// const user1: User = {
//     name: "John Doe",
//     age: 40,
//     gender: 'Male',
//     bloodGroup: 'A+',
// }



type FrontendDeveloper = {
    skill: string[];
    designation1: 'Frontend Developer';
}

type BackendDeveloper = {
    skill: string[];
    designation2: 'Backend Developer';
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullStackDeveloper : FullStackDeveloper = {
    skill: ['HTML', 'CSS', 'Javascript', 'React', 'NodeJS'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer',
}



//
}