import { useState, useRef } from 'preact/hooks';
import { createTemplateI18nXlsx, convertI18XlsxToJsonDirectory } from 'i18n-xlsx-to-json-directory';
import Button from '@/components/Button';

export default function HeaderInner() {
  const fileInputRef = useRef<HTMLInputElement>();
  const [filename, setFilename] = useState<string>();

  const downloadI18nJsonZip = () => {
    if(fileInputRef?.current) {
      convertI18XlsxToJsonDirectory((fileInputRef.current.files ?? [])[0]);
    }
  };

  return (
    <div class='flex flex-col items-center gap-4'>
      <div class='flex items-center gap-4'>
        <Button
          onClick={() => createTemplateI18nXlsx()}
        >
          .xlsx 템플릿 다운로드
        </Button>
        <Button
          onClick={() => fileInputRef.current?.click()}
        >
          .xlsx 파일 선택
        </Button>
      </div>
      <br/>
      <input
        ref={fileInputRef}
        class='sr-only'
        type='file'
        onchange={() => setFilename((fileInputRef.current?.files ?? [])[0]?.name)}
      />
      <div>
        {filename && (
          <div class='flex flex-col items-center gap-4'>
            <span>선택된 파일: {filename}</span>
            <Button
              onClick={() => downloadI18nJsonZip()}
            >
              JSON 디렉토리 다운로드
            </Button>
          </div>
        )}
        {!filename && (
          <div>
            <span>{'선택된 파일이 없습니다.'}</span>
          </div>
        )}
      </div>
    </div>
  );
}
