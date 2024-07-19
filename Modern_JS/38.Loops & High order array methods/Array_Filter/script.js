// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// short version
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

//foreach
// const evenNumbers = [];

// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });

// console.log(evenNumbers);

const companies = [
  {
    name: 'Tech Innovators',
    location: 'San Francisco, CA',
    industry: 'Technology',
    employees: 200,
    founded: 1300,
    end: 2000,
  },
  {
    name: 'Health Solutions',
    location: 'New York, NY',
    industry: 'Technology',
    employees: 500,
    founded: 2005,
    end: 2010,
  },
  {
    name: 'Green Energy Corp',
    location: 'Austin, TX',
    industry: 'Energy',
    employees: 150,
    founded: 2015,
    end: 2020,
  },
  {
    name: 'FinTech Pros',
    location: 'Chicago, IL',
    industry: 'Finance',
    employees: 300,
    founded: 2012,
    end: 2020,
  },
  {
    name: 'EduTech Pioneers',
    location: 'Boston, MA',
    industry: 'Technology',
    employees: 120,
    founded: 2018,
    end: 2030,
  },
];

//Get Only Technology industry companies

// const techCompanies = companies.filter(
//   (company) => company.industry === 'Technology'
// );

// console.log(techCompanies);

// get companies that started in or after 2000 and ended in or before 2015
// const filterCompanies = companies.filter(
//   (company) => company.founded >= 2000 && company.end <= 2015
// );

// console.log(filterCompanies);

//Get companies that lasted 10 years or more
const longCompanies = companies.filter(
  (company) => company.end - company.founded >= 10
);

console.log(longCompanies);
