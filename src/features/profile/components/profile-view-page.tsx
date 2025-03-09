import PageContainer from '@/components/layout/page-container';
import Settings from './profile-settings';

export default function ProfileViewPage() {
  return (
    <PageContainer>
      <div className='space-y-4'>
        <Settings />
      </div>
    </PageContainer>
  );
}
