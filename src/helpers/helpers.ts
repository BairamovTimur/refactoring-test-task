import { getRandomName } from './additionalHelpers';

//Список выводимых пользователей
//можно на время рефакторинга уменьшить
//чтобы было меньше тормозов, но замеры делаются на 1000
const USER_COUNT = 1000;

export interface IUserData {
    id: number;
    name: string;
    selected: boolean;
}

//сложный алгоритм который нельзя менять
//он возвращает начальный список юзеров
//в суть алгоритма лезть не нужно, главное понять что эта функция "тяжелая"
export const getUserList = () => {
    const data: IUserData[] = [];
    for (let i = 1; i <= USER_COUNT * 5; i++) {
        for (let k = 1; k <= 10000; k++) {
            if (i % 5 === 0 && k % 10000 === 0) {
                data.push({
                    id: Math.round(i / 1),
                    name: `${getRandomName()} ${getRandomName()}`,
                    selected: false,
                });
            }
        }
    }
    return data;
};

//Функция условно сохраняет одного пользователя куда-то,
//предполагается что она принимает измененного пользователя
//в сам алгоритм лезть не нужно он бессмысленен, нужен только
//для создания нагрузки
export const saveUserInStorage = ({ id, name, selected }: IUserData) => {
    const data: IUserData[] = [];
    for (let i = 1; i <= 10000; i++) {
        data.push({
            id,
            name,
            selected,
        });
    }
};

//Класс профайлера нужен для замера времени выполнения клика
//создание класса стартует замер
//вызов метода endProfile завершает замер и выводит
//результаты в консоль
export const ClickProfiler = class {
    startTime: number;

    constructor() {
        this.startTime = new Date().getTime();
    }

    endProfile = () => {
        const endTime = new Date().getTime();
        console.log(`Click execution time ${endTime - this.startTime}`);
    };
};
