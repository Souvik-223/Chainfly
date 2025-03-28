import { FileUploader } from '@/components/file-uploader';
import PageContainer from '@/components/layout/page-container';
import Results from './_components/Results';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

export default function TestDefect() {
  // const { onUpload, progresses, uploadedFiles, isUploading } = useUploadFile(
  //     "imageUploader",
  //     {
  //       defaultUploadedFiles: [],
  //     }
  //   )

  return (
    <PageContainer>
      <div className='flex flex-col gap-5'>
        <div className='mb-8 flex flex-1 flex-col space-y-6'>
          <Heading
            title='Defects Testing'
            description='Test Your own Solar Panel images for testing for faults.'
          />
          <Separator />
        </div>
        <div className='flex w-[80vw] flex-col justify-center gap-5'>
          <FileUploader
            maxFiles={4}
            maxSize={4 * 1024 * 1024}
            // progresses={progresses}
            // onUpload={onUpload}
            // disabled={isUploading}
          />
          <Results />
        </div>
      </div>
    </PageContainer>
  );
}
