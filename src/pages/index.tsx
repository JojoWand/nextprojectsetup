import Head from "next/head";
import { useState } from "react";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Head>
        <title>Home Page Project</title>
      </Head>

      <main>
        <button onClick={() => setCount(count + 1)}>Add Count</button>
        {count}
      </main>
    </div>
  );
};
export default Home;
