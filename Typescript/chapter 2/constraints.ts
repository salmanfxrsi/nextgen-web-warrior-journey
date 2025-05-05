{
  // constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ): object => {
    const course = "Web Development Course By Farsi";
    return {
      ...student,
      course,
    };
  };

  const studentOne = addCourseToStudent({
    id: 0,
    name: "Alex",
    email: "alex@gmail.com",
    devType: "NL",
  });

  const studentTwo = addCourseToStudent({
    id: 2,
    name: "Green",
    email: "green@gmail.com",
    phone: "IPhone",
  });

  const studentThree = addCourseToStudent({
    id: 2,
    name: 'Michael',
    email: 'michael@gmail.com',
    class: 10,
  })

  //
}
 