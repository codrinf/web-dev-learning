const students = [
  {
    id: "897456789076",
    class: "12-B",
    name: "Stefanescu Ion",
    birth: "2002-03-18",
    sex: "M",
    bonusPoints: 12,
    scores: [
      {
        subject: "math",
        score: 66
      },
      {
        subject: "biology",
        score: 70
      },
      {
        subject: "sport",
        score: 80
      }
    ],
    favoriteSubjects: ["sport", "biology"],
    friends: ["095723222322"],
    hadFinalExam: false,
  },
  {
    id: "8234567000033",
    class: "11-A",
    name: "Popescu Diana",
    birth: "2004-11-20",
    sex: "F",
    bonusPoints: 20,
    scores: [
      {
        subject: "literature",
        score: 60
      },
      {
        subject: "biology",
        score: 98
      },
      {
        subject: "science",
        score: 77
      }
    ],
    favoriteSubjects: ["science", "biology"],
    friends: ["998765434444"],
    hadFinalExam: false,
  },
  {
    id: "998765434444",
    class: "12-A",
    name: "Voinea Ionela",
    birth: "2003-01-09",
    sex: "F",
    bonusPoints: 0,
    scores: [
      {
        subject: "literature",
        score: 98
      },
      {
        subject: "science",
        score: 89
      },
      {
        subject: "sport",
        score: 82
      },
      {
        subject: "chemistry",
        score: 77
      }
    ],
    favoriteSubjects: ["science", "literature"],
    friends: ["8234567000033", "00987632345"],
    hadFinalExam: false,
  },
  {
    id: "00987632345",
    class: "12-A",
    name: "Camil Vlad",
    birth: "2002-02-12",
    sex: "M",
    bonusPoints: 9,
    scores: [
      {
        subject: "math",
        score: 77
      },
      {
        subject: "biology",
        score: 40
      },
      {
        subject: "chemistry",
        score: 82
      }
    ],
    favoriteSubjects: ["science", "chemistry"],
    friends: ["8234567000033", "897456789076"],
    hadFinalExam: false,
  },
  {
    id: "095723222322",
    class: "11-A",
    name: "Barcan Cosmin",
    birth: "2004-02-22",
    sex: "M",
    bonusPoints: 0,
    scores: [
      {
        subject: "math",
        score: 87
      },
      {
        subject: "biology",
        score: 55
      },
      {
        subject: "chemistry",
        score: 45
      },
      {
        subject: "literature",
        score: 98
      }
    ],
    favoriteSubjects: ["science", "chemistry"],
    friends: ["897456789076"],
    hadFinalExam: false,
  }
]


const teachers = [
  {
    id: "987654323453232",
    name: "Munteanu Ioana",
    teaches: ["11-A", "12-A"],
    subject: "chemistry"
  },
  {
    id: "12398765435678",
    name: "Topor Gheorghe",
    teaches: ["12-A"],
    subject: "science"
  },
  {
    id: "765333567",
    name: "Drujba Vasile",
    teaches: ["12-B"],
    subject: "math"
  }
]

const absentStudents = ["897456789076", "998765434444"];