const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers);

// same with forEach

const doubledNumbers2 = [];

numbers.forEach((num) => {
  doubledNumbers2.push(num * 2);
});

console.log(doubledNumbers2);

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

//Create an array of company names
const companyNames = companies.map((item) => item.name);

console.log(companyNames);

//Create an array with just company and industry

const newArray = companies.map(
  (company) => company.name + ' : ' + company.industry
);

// console.log(newArray);

//or

const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    industry: company.industry,
  };
});

console.log(companyInfo);

// create an array of objects with the name and the length of each company in years

const companyYears = companies.map((company) => {
  return {
    name: company.name,
    years: company.end - company.founded + ' years',
  };
});

console.log(companyYears);

//Chain map methods
const squareAndDouble = numbers
  .map((num) => Math.sqrt(num))
  .map((sqrt) => sqrt * 2);

console.log(squareAndDouble);

const squareAndDouble2 = numbers
  .map(function (num) {
    return Math.sqrt(num);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });
console.log(squareAndDouble2);

//Chaining different methods

const evenDoubled = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);

console.log(evenDoubled);
