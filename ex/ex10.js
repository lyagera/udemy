const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
      ruby: "30%",
      sdfsd: "25%",
    },
    exp: "3 month",
  },
  showAgeAndLangs: function () {
    const language = personalPlanPeter.skills.languages;
    console.log(language.toString().replace(",", " "));

    console.log(
      `Мне ${personalPlanPeter.age} и я владею языками: ${language
        .toString()
        .toUpperCase()
        .replace(",", " ")}`
    );
  },
};

function showExperience(plan) {
  const { exp } = personalPlanPeter.skills;
  return exp;
}

function showProgrammingLangs(plan) {
  const a = {};
  const lang = Object.assign({}, personalPlanPeter.skills.programmingLangs);
  console.log(Object.hasOwn(lang, null));

  console.log("a");
  if (Object.keys(lang).length == 0) {
    console.log("sdf");
  } else {
    for (let key in lang) {
      a[key] = `Язык ${key} изучен на ${lang[key]}`;
    }
    console.log(Object.values(a).join("\n"));

    // return a.join("");
  }
}
showProgrammingLangs(personalPlanPeter);

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
