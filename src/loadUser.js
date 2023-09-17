// напишем функцию для соединения с сервером и получения данных оттуда.
// Посмотрим как MOCK работает
import httpGet from './http';

export default function loadUser(id) {
  // bad practice
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}
