import React from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const Board = () => {
  //   const queryClient = useQueryClient();
  const { isLoading, error, data, isFetching } = useQuery('board', () =>
    fetch(
      'https://api.github.com/repos/tannerlinsley/react-query',
    ).then((res) => res.json()),
  );
  if (isLoading) return 'Loading...';
  console.log('데이터', data);
  if (error) return 'error' + error;

  // if()
  //   const mutation = useMutation(postBoard , {
  //       onSuccess : () => {
  //           queryClient.invalidateQueries('board')
  //       }
  //   })

  return (
    <div>
      <strong>{data.network_count}</strong>
      <strong>{data.default_branch}</strong>
      <strong>{data.open_issues}</strong>
      <div>{isFetching ? '업데이트' : ''}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
};

export default Board;
