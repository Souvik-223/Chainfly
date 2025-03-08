import { delay } from '@/constants/mock-api';
import { TeamMembers } from '@/features/overview/components/team-members';

export default async function Teams() {
  await delay(3000);
  return <TeamMembers />;
}
