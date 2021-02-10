


/**
 * Mastodontul asta mare de functie creaza niste elemente pentru un converter generic si le ataseaza
 * de un element din dom. primeste ca paramentru un obiect prin care precizezi niste configurari.
 * 
 * @param config Configuration for the converter
 * @param config.rootElement the root element to attach the converter to the dom
 * @param config.title The title of the Converter
 * @param config.leftLabel The label of the left input
 * @param config.rightLabel The label of the right input
 * @param config.conversionCriteria Function to calculate the left value for the right result
 * @param config.oppositeConversion Function to calculate the right value for the left result
 */
const createConverter = ({
  // valorile de dupa egal sunt valori de default
  // in caz ca atunci cand se apeleaza functia nu se va specifica un "rootElement"
  // acela va fi by default 'body'
  // la fel e valabil pentru toate valorile din obiect
  rootElement = 'body',
  title = "A-B Converter",
  leftLabel = "A",
  rightLabel = "B",
  prepend = false,
  conversionCriteria = (val) => val * 2,
  oppositeConversion = (val) => val / 2,
} = {}) => {

  // initializam elementul pe care o sa atasam converterul
  // verificam daca este string, daca nu este string inseamna ca valoarea este deja un DomElement, altfel
  // il selectam noi cu querySelector.
  const root = (typeof rootElement === 'string') ? document.querySelector(rootElement) : rootElement;

  // creem un wrapper in care vom adauga toate elementele necesare
  const wrapper = document.createElement("div");
  // si clasa respectiva pentru a il targeta in css
  wrapper.classList.add("converter-wrapper");

  // creem titlul
  const elementTitle = document.createElement("h1");
  // si ii adaugam titlul din obiectul config
  elementTitle.innerText = title;

  // creem div-ul in care vom adauga contentul necesar
  const inputWrapper = document.createElement("div");
  // si clasa pentru css
  inputWrapper.classList.add("input-wrapper");

  // creem div-ul in care vom adauga label-urile
  const labelSection = document.createElement("div");
  // si clasa pentru css
  labelSection.classList.add("label-section");

  // creem primul label
  const label1 = document.createElement("label");
  // ii adaugam textul din config
  label1.innerText = leftLabel;
  
  // creem al 2-lea label
  const label2 = document.createElement("label");
  // adaugam textul din config
  label2.innerText = rightLabel;

  // creem div-ul in care vom adauga input-urile
  const inputSection = document.createElement("div");
  inputSection.classList.add("input-section");

  // creem inputurile si le adaugam attributes 
  // si eventListener la change
  const input1 = document.createElement("input");
  input1.setAttribute('type', 'number');
  const input2 = document.createElement("input");
  input2.setAttribute('type', 'number');
  
  // cand se schimba valoarea in input1 
  // apelam functia de conversie din config si updatam input2
  input1.addEventListener("change", (ev) => {
    const value = Number(ev.target.value);
    input2.value = conversionCriteria(value);
  });

  // la fel dar vice-versa folosind cealalta functie pentru 
  // a calcula valoarea :D
  input2.addEventListener("change", (ev) => {
    const value = Number(ev.target.value);
    input1.value = oppositeConversion(value);
  });
  
  // adaugam elementele pe fiecare element parinte
  labelSection.appendChild(label1);
  labelSection.appendChild(label2);
  
  inputSection.appendChild(input1);

  const middleIcon = document.createElement("span");
  middleIcon.innerHTML = `<i class="fas fa-arrows-alt-h"></i>`;
  inputSection.appendChild(middleIcon);
  inputSection.appendChild(input2);

  inputWrapper.appendChild(labelSection);
  inputWrapper.appendChild(inputSection);


  wrapper.appendChild(elementTitle);
  wrapper.appendChild(inputWrapper);

  // in final adaugam elementul primar pe 
  // elementul din dom si se randeaza toata chestia asta pe browser
  if(prepend)
    root.prepend(wrapper)
  else
    root.appendChild(wrapper);
};

// aici poti sa creezi cate convertere vrei
// fiindca avem valori default poti sa apelezi functia fara nici o valoarea
// si se vor folosi alea by default
createConverter();

// sau adaugi valorile pe care le vrei tu cand creezi unul
// in felul asta incapsulezi intr-o functie toata logica aia complexa si poti sa
// adaugi doar informatiile de care ai nevoie
// si poti sa o refolosesti de cate ori vrei. 
createConverter({
  rootElement: document.querySelector('.main-wrapper'),
  title: "Euro Ron Converter",
  leftLabel: "Euro",
  rightLabel: "Ron",
  conversionCriteria: value => (value * 4.87).toFixed(2),
  oppositeConversion: value => (value / 4.87).toFixed(2),
});

createConverter({
  rootElement: document.querySelector('.main-wrapper'),
  title: "Sterling Ron Converter",
  leftLabel: "Sterling",
  rightLabel: "Ron",
  conversionCriteria: value => (value * 5.45).toFixed(2),
  oppositeConversion: value => (value / 5.45).toFixed(2),
});

createConverter({
  rootElement: document.querySelector('.main-wrapper'),
  title: "Feet-Centimeter Converter",
  leftLabel: "Feet",
  rightLabel: "Centimeters",
  conversionCriteria: value => (value * 30.48).toFixed(2),
  oppositeConversion: value => (value / 30.48).toFixed(2),
});

createConverter({
  rootElement: document.querySelector('.main-wrapper'),
  title: "Feet-Centimeter Converter",
  leftLabel: "Feet",
  rightLabel: "Centimeters",
  conversionCriteria: value => (value * 30.48).toFixed(2),
  oppositeConversion: value => (value / 30.48).toFixed(2),
});