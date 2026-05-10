import {Manager} from "./modules/manager.js";


let manager = new Manager("myList", document.body);
manager.init();

                                                                                    //let tasksNew = ["aaa","bbb", "ccc"];
                                                                                    //localStorage.setItem("tasks", JSON.stringify(tasksNew));
                                                                                    //wersja z 1 kluczem "tasks" i wieloma wartościami - przerobić any działało

// const items = { ...localStorage };

// console.log(Object.keys(items));

// const result = Object.entries(items)
//   .filter(([key, value]) => key.includes(taskPartId) & key.includes(manager.id))
//    .forEach(([key, value]) => manager.add(value, key));
// console.log(result) 







