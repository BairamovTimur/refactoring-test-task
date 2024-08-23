# Установка

Выполняем команду `npm install`

# Запуск проекта

Выполняем команду `npm start`

# Описание

Приложение отображает список пользователей с флагами выбора, на странице отображается общее количество пользователей, а так же
количество выбранных и невыбранных пользователей. При нажатии на флаг изменяется количество выбранных и невыбранных пользователей,
а так же измененный пользователь должен отправляться на бекенд

### Проблемы

1. Код слишком сложный
2. При нажатии на чекбокс форма подтормаживает

### Задания

В рамках задания необходимо:

1. Перед изменением кода создать отдельную ветку для своих изменений с названием task-1
2. Произвести рефакторинг кода, чтобы он получился максимально простым и понятным
3. Произвести оптимизацию кода уменьшить количество рендеров их время и сократить время сохранения пользователя
4. Изменить верстку так, чтобы при скролле вниз значения счетчиков оставались в области видимости (скроллиться должны только пользователи)

### Ограничения

1. Исправлять можно только файлы UserList.tsx, User.tsx и .css файлы
2. Нельзя отказываться от методов getUserList (преобразование списка пользователей) и updateUser (сохранение пользователя)
3. Компонент clickProfiler нужен для замера производительности сохранения пользователя
   и сам по себе тормозов не вызывает. Инициализируется при нажатии на чекбокс
   его метод endProfile вызывается после сохранения пользователя.
   В итоговом решении он должен присутствовать.

### Доп информация

В консоли выводятся значения профайлеров:

1. Показывает время на каждый рендер формы
2. Показывает время от нажатия на чекбокс до завершения сохранения изменений

### Желаемые показатели скорости выполнения:

1. При нажатии на флаг общее время всех рендеров не должно превышать 15 мс
2. Время от нажатия на флаг до окончания сохранения пользователя не должно превышать 15 мс
