import { useQuery } from '@tanstack/react-query';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.json();
};

export default function Posts() {
  const { data, error, isLoading } = useQuery<Post[]>(['posts'], fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error)
    return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>ReactQuery를 사용하여 외부 API에서 데이터를 가져오는 테스트</h1>
      <h2>가져온 데이터 (Posts)</h2>
      <ul>
        {data &&
          data.map(
            (
              post, // data가 존재하는지 확인합니다.
            ) => <li key={post.id}>{post.title}</li>,
          )}
      </ul>
    </div>
  );
}
