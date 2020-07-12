// Pentru fiecare task, pastreaza pasii:

// 1. Cum ai rezolva taskul daca ar trebui sa il rezolvi in realitate? Descrie fiecare pas.
// 2. Encapsuleaza fiecare task intr-o functie pe care o vei apela ulterior
// 3. Pentru fiecare task, incearca orice rezolvare. In caz de nu merge, nu mai apela functia (pentru a evita eroare)
// 4. Rezolva fiecare task imediat dupa descrierea sa


// Task 1: Cate un array cu studentii de gen masculin sau feminin.


// Task 2: Un array cu studentii carora le place subiectul "science" (se afla in array favoriteSubjects)

// Task 3: Un array cu stundetii care au avut ultimul examen (hadFinalExam este true)

// Task 3B: Toti elevii din clasa "12-A"

// Task 3C: Toti elevii din clasa "12"

// Task 4: Numele studentului cu cel mai mare bonusPoints

// Task 5: Un array cu numele studentiulor care NU au bonusPoints

// Task 6: Un array cu studentii nascuti in 2004

// Task 5: Studentul cu punctajul mediu cel mai mare (average de scores array)

// Task 7: Un array cu numele studentilor care sunt absenti astazi

// Task 8: Pentru fiecare teacher, scrie numele studentilor carora le prada
// Exemplu Rezolvare:
// 1. Parcurg lista teachers
// 2. Pentru fiecare teacher, pastrez clasele la care le prada intr-o variabila: teaches
// 3. Pentru fiecare teacher, parcurg lista studenti si extrag clasa din care face parte
// 4. Daca clasa se afla in lista de la punctul 2, atunci pastrez numele elevului
function showTeachersStudents() {

  // Varianta "cu for":
  const teachersAndStudents = []; // un array final, care va contine profii si stundetii sau
  for (let i = 0; i < teachers.length; i++) { // parcurgerea arrayuli de profi (punctul 1 de mai sus)
    const teacher = teachers[i]; // doar pastrez proful curent intr-o variabla (punctul 2 de mai sus)
    const teacherClasses = teacher.teaches; // pastrez clasele profului curent intr-o variabla (punctul 2 de mai sus)
    const teacherStudents = []; // un array pe care il voi popula mai jos DOAR cu studentii profului
    
    for (let j = 0; j < students.length; j++) { // parcurg lista de studenti (punctul 3 de mai sus)
      const student = students[j]; // pastrez o variabila locala pentru fiecare student 
      if (teacherClasses.indexOf(student.class) > -1) { // verific daca clasa studentului curent se afla printre cele la care preda proful 
        teacherStudents.push(student.name); // daca da, pastrez numele studentului
      }
    }
    // console.log('Proful ', teacher.name, ' preda elevilor ', teacherStudents.toString());
    // populez arrayul de profi si studenti
    teachersAndStudents.push({
      teacher: teacher.name,
      students: teacherStudents
    });
  }
  console.log('teachersAndStudents ', teachersAndStudents)

  // Varianta "0 line"
  const teachersAndStudents2 = teachers.map(x => {
    return {
      teacher: x.name,
      students: students.filter(y => x.teaches.indexOf(y.class) > -1).map(y => y.name)
    }
  });
  console.log('teachersAndStudents2 ', teachersAndStudents2)

}
showTeachersStudents();




// Task 9: Pentru fiecare teacher, scrie media notelor obtinute de elevii notati la materia respectiva (indiferent daca sunt din clasa lui sau nu)


// Task X: Un array cu numele fiecarui student si varsta sa
