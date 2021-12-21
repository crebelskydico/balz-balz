import type { NextPage } from 'next';

const BASE_CLASS = 'Privacy';

const Privacy: NextPage = () => {
  return (
    <div className={`${BASE_CLASS}_wrapper`}>
      <main className={`${BASE_CLASS}_content`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi
        architecto est a accusantium quidem consequatur! Delectus modi possimus
        fugit soluta eos, perferendis repellat sit. Non deleniti quisquam
        aperiam facere?
      </main>
    </div>
  );
};

export default Privacy;
