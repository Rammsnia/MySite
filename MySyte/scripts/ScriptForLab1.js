var mass_1, mass_2;
var error_text;


/**
 *Проверка строки
 */
/**
 *Определение количества входных элементов
 */
function countElement(mass,element){
    let count = 0;
    for(let i = 0; i<mass.length; i++){
        if(mass[i] == element){
            count++;
        }
    }
    return count;
}
function validation(str) {
    let mass=false;
    if (str.length>0)
    {
        mass=str.split(" ");
        for(let i = 0; i<mass.length; i++) {
            if (mass[i][0]<'0' || mass[i][0]>'9') {
                error_text = 'Ошибка при вводе массива: ' + str + '\n' + 'В элементе ' + mass[i] + ' замените первый символ на цифру';
                mass = false;
                break;
            }
            if ((mass[i][2])%2 ==0 ) {
                error_text = 'Ошибка при вводе массива: ' + str + '\n' + 'В элементе ' + mass[i] + ' замените третий символ на нечетную цифру';
                mass = false;
                break;
            }
            if ((mass[i][1])%2 !=0 ) {
                error_text = 'Ошибка при вводе массива: ' + str + '\n' + 'В элементе ' + mass[i] + ' замените второй символ на четную цифру';
                mass = false;
                break;
            }
            if (mass[i][3]<'a' || mass[i][3]>'z') {
                error_text = 'Ошибка при вводе массива: ' + str + '\n' + 'В элементе ' + mass[i] + ' замените четвертый символ на букву';
                mass = false;
                break;
            }

            /**
             * Убрать повторяющиеся элементы
             */
            for(let i=0; i<mass.length; i++){
                if(countElement(mass, mass[i]) > 1){
                    mass.splice(i,1);
                    i--;
                }
            }
        }
    }
    else
    {
        error_text = 'Массив не должен быть пустой';
    }

    return mass;
}

/**Объединение массивов, после удаление в них повторов*/
function unification(m1,m2){
    let result = [...new Set([...m1,...m2])];
    return result;
}
/**Пересечение массивов*/
function intersection(arr1,arr2){
    /**Вызываем метод фильтр для первого массива и с помощью метода .includes смотрим, есть ли такой элент во втором массиве*/
    let result = arr1.filter(x=>arr2.includes(x));
    return result;
}
/**Симметрическая разность*/
function diff(mass1,mass2){
    /**Метотд .contact соединяет два отфильтрофанных массива*/
    let difference = mass1.filter(x => !mass2.includes(x)).concat(mass2.filter(x => !mass1.includes(x)));
    return difference;
}
function diffA(massA,massB){
    /**При помощи фильтра я убрал исключил все элементы из массива А, которые есть в массве В*/
    let result = massA.filter(x => !massB.includes(x));
    return result;
}
function diffB(arrA,arrB){
    /**При помощи фильтра я убрал исключил все элементы из массива В, которые есть в массве А*/
    let result = arrB.filter(x => !arrA.includes(x));
    return result;
}



function rasschet()
{
    var result_full = "";
    var a = document.getElementById("mas1")
    var b = document.getElementById("mas2")
    if((mass_1=validation(a.value)) == false || (mass_2=validation(b.value)) == false)
        alert(error_text)
    if(mass_1 !=false && mass_2 != false)
    {
        result_full = "Объединение строки: " + unification(mass_1, mass_2) + '\n';
        result_full += "Пересечение строки: " + intersection(mass_1, mass_2) + '\n';
        result_full += "Симметрическая разность: " + diff(mass_1,mass_2)+ '\n';
        result_full += "Разность A(A/B): " + diffA(mass_1,mass_2)+ '\n';
        result_full += "Разность B(B/A): " + diffB(mass_1,mass_2)+ '\n';
    }

    document.getElementById("OutResult").innerText = "Результат выполнения операци: "+'\n'+result_full;
}

