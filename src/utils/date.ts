const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]

export const convertEventDate = ( date: string ) => {
   const [ year, month, date_num ] = date.split("-");
   return `${ date_num } ${ months[ Number(month) -  1]} ${ year }`;
}