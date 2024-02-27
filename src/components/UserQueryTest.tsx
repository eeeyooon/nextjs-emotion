import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.json();
};

// 사용자 데이터를 가져오는 새로운 컴포넌트
export default function Users() {
  const { data, error, isLoading } = useQuery<User[]>(['users'], fetchUsers);

  if (isLoading) return <div>Loading users...</div>;
  if (error instanceof Error)
    return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>{data && data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}
