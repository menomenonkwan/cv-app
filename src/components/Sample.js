const sample = {
  general: {
    title: 'General Information',
    firstName: 'Homer',
    lastName: 'Simpson',
    phone: '555-555-1234',
    email: 'example@email.com',
    show: true,
  },
  education: {
    school1: {
      schoolName: 'Springfield University',
      degree: 'Nuclear Safety',
      year: '2020',
      extra: 'Party down with the nerds',
      show: true,
    },
    school2: {
      schoolName: 'Springfield High School',
      degree: 'GE',
      year: '2016',
      extra: 'I can\'t believe I ate the whole thing',
      show: true,
    },
    school3: {
      schoolName: 'Springfield Elementary',
      degree: 'none',
      year: '2012',
      extra: '',
      show: true,
    },
  },
  experience: {
    employer1: {
      name: 'Springfield Nuclear Plant',
      yearStart: '2010',
      yearEnd: 'present',
      description: 'You know... safety stuff',
      show: true,
    },
    employer2: {
      name: 'Krusty Burger',
      yearStart: '2008',
      yearEnd: '2010',
      description: 'Make and Eat burgers',
      show: true,
    },      
  },
  newEdu: false,
  newEx: false,
}

export default sample;