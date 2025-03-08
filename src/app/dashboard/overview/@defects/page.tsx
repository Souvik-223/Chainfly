import { delay } from '@/constants/mock-api';
import { DefectsResolved } from '@/features/overview/components/defects-resolved';
import { TeamMembers } from '@/features/overview/components/team-members';

export default async function Defects() {
  await delay(3000);
  return <DefectsResolved />;
}
