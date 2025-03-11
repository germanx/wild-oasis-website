import { getCabins } from '@/app/_lib/data-service';

async function CabinCount() {
  const cabins = await getCabins();

  return <>{cabins.length ? cabins.length : '<ERROR>'}</>;
}

export default CabinCount;
