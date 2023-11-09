import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    //para almacenar la lista de números
    const numbers = ref([]);
// función para añadir un número aleatorio
    const addNumber = () => {
      const randomNumber = parseInt(Math.random() * 100) + 1;
      numbers.value.push(randomNumber);
    };
//crear una computed property para filtrar los números
    const evenNumbers = computed(() => {
      return numbers.value.filter((n) => n % 2 === 0); // TODO: Modifica el método filter para quedarte únicamente con los números pares del array de numbers
    });
    const oddNumbers = computed(() => {
      return numbers.value.filter((n) => n % 2 !== 0);
  });

    const lenghtArrayText = computed(() => {
      return numbers.value.length % 2 === 0 ? 'Par' : Impar;
    });
    


    //devolver las referencias y funciones que se necesitan en el template 
    return {
      numbers,
      addNumber,
      oddNumbers,
      evenNumbers,
      lenghtArrayText
    };
  },
}).mount("#app");
