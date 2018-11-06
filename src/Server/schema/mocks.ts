

export default {
  User: () => {
    return { id: 1, username: 'First User', email: 'firsty@email.com' }
  },
  Message: () => {
    return [
      {
        id: 1,
        user_id: 1,
        message: "ooooowwweee",
        createdAt: 1541289600,
      },
      {
        id: 2,
        user_id: 1,
        message: "this is mocking",
        createdAt: 1541290600,
      },
      {
        id: 3,
        user_id: 1,
        message: "such data wow",
        createdAt: 1541292600,
      },
    ]
  }
}