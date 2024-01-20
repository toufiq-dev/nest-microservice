describe('Reservations', () => {
  beforeAll(async () => {
    const user = {
      email: 'toufiq.dev@gmail.com',
      password: 'Strongpassword!',
    };

    await fetch('http://auth:3001', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  });

  test('Create', () => {});
});
