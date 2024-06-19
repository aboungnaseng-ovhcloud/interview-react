const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Welcome to React Test</h1>
      </div>
      <div>
        <h2>Reference</h2>
        <ul>
          <li>
            Rick and Morty Api :{" "}
            <a
              rel="stylesheet"
              href="https://rickandmortyapi.com/documentation"
            >
              https://rickandmortyapi.com/documentation
            </a>
          </li>
          <li>
            Antd Design system :{" "}
            <a rel="stylesheet" href="https://ant.design/components/overview">
              https://ant.design/components/overview
            </a>
          </li>
          <li>
            Tanstack Query :
            <a
              rel="stylesheet"
              href="https://tanstack.com/query/latest/docs/framework/react/overview"
            >
              https://tanstack.com/query/latest/docs/framework/react/overview
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Read the following steps</h2>
        <ol>
          <li>
            Create a branch 'test-ram-yourname' and commit each after each step
          </li>
          <li>
            Create a '/characters' path and use React Query to request 20 firsts
            characters (useQuery, useInfiniteQuery)
          </li>
          <li>
            Display it with a table from antd or chakra ui, with the column id,
            name; status, specis, gender, location name
          </li>
          <li>
            Add load more button at the bottom of the table to display the
            following items until the end
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomePage;
