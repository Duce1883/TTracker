jest.spyOn(window.localStorage.__proto__, 'setItem');
jest.spyOn(window.localStorage.__proto__, 'getItem');
jest.spyOn(window.localStorage.__proto__, 'removeItem');

test('saves and retrieves data from localStorage', () => {
    localStorage.setItem('key', 'value');

    const retrievedValue = localStorage.getItem('key');

    expect(retrievedValue).toBe('value');
});

test('handles missing item in localStorage', () => {
    const retrievedValue = localStorage.getItem('nonExistentKey');

    expect(retrievedValue).toBeNull();
});

afterAll(() => {
    jest.restoreAllMocks();
});