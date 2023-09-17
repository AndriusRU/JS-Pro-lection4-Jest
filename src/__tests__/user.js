import loadUser from "../loadUser.js";
import { httpGet } from "../http.js";
jest.mock('../http');
// используем mock


// эта функция выполняется каждый раз, когда запускается тот или иной тест
beforeEach(() => {
    jest.resetAllMocks();
});

// afterEach - запускается после каждого теста
// beforeAll - запускается перед всеми тестами единоразово
// afterAll - запускается после всех тестов единоразово

test('should call loadUser once', () => {
    httpGet.mockReturnValue(JSON.stringify({}));
    loadUser(1);
    expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});