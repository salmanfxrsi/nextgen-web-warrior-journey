{
    // function with generics
    const createArray = (param: string) : string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T> (param: T) : T[] => {
        return [param];
    }

    const res1 = createArray('Bangladesh');
    const res2 = createArrayWithGeneric <boolean> (true);

    interface Object {
        id: number;
        name: string;
    }
    
    const resGenericObj = createArrayWithGeneric <Object> ({id: 222, name: 'Farsi'});

    const createArrayWithTuple = <X, Y> (paramOne: X, paramTwo: Y) : [X, Y] => {
        return [paramOne, paramTwo];
    }

    const res3 = createArrayWithTuple <string, number> ('Bangladesh', 907);
    const res4 = createArrayWithTuple <boolean, string> (true, 'Farsi');

    interface Object {
        id: number;
        name: string;
    }
    
    const resGenericTuple = createArrayWithTuple <String, Object> ('Green', {id: 222, name: 'Farsi'})

    const addCourseToStudent = <T> (student : T) : object => {
        const course = 'Web Development Course By Farsi';
        return {
            ...student,
            course,
        }
    }

    const studentOne = addCourseToStudent({name: 'Alex',  email: 'alex@gmail.com', devType: 'NL'})

    const studentTwo = addCourseToStudent({name: 'Alex',  email: 'alex@gmail.com', phone: 'IPhone'})

    //
}