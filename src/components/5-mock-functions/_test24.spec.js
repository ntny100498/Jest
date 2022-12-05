import axios from 'axios';
import Users from './test24';

jest.mock('axios');

// Mocking Modules
test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  // Không chạm vào API
  // Muốn axios.get('/users.json') trả lại một phản hồi giả mạo
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});