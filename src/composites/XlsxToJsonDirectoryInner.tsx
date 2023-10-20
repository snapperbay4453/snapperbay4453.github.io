import { useState, useRef } from 'preact/hooks';
import {
  createTemplateXlsx,
  convertXlsxToJsonZip,
  convertJsonZipToXlsx,
} from 'i18n-xlsx-to-json-directory/browser';
import Button from '@/components/Button';

export default function HeaderInner() {
  const xlsxFileInputRef = useRef<HTMLInputElement>();
  const jsonZipFileInputRef = useRef<HTMLInputElement>();
  const [xlsxFilename, setXlsxFilename] = useState<string>();
  const [jsonZipFilename, setJsonZipFilename] = useState<string>();

  const downloadI18nJsonZip = () => {
    if(xlsxFileInputRef?.current) {
      convertXlsxToJsonZip((xlsxFileInputRef.current.files ?? [])[0]);
    }
  };

  const downloadI18nXlsx = () => {
    if(jsonZipFileInputRef?.current) {
      convertJsonZipToXlsx((jsonZipFileInputRef.current.files ?? [])[0]);
    }
  };

  return (
    <div class={`
      flex flex-col items-center gap-4
      relative border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl
      mx-auto max-w-[360px] py-8
    `}>
      <div>
        <div class='flex flex-col items-center gap-4 p-4'>
          <p class='text-2xl font-bold text-center'>시작하기</p>
          <Button
            onClick={() => createTemplateXlsx()}
          >
            .xlsx 템플릿 다운로드
          </Button>
        </div>
      </div>
      <div class='flex flex-col items-center gap-4 p-4 mt-8'>
        <p class='text-2xl font-bold text-center'>XLSX → JSON 디렉토리</p>
        <Button
          onClick={() => xlsxFileInputRef.current?.click()}
        >
          .xlsx 파일 선택
        </Button>
        <input
          ref={xlsxFileInputRef}
          class='sr-only'
          type='file'
          onchange={() => setXlsxFilename((xlsxFileInputRef.current?.files ?? [])[0]?.name)}
        />
        {xlsxFilename && (
          <>
            <span>{xlsxFilename}</span>
            <Button
              onClick={() => downloadI18nJsonZip()}
            >
              변환
            </Button>
          </>
        )}
        {!xlsxFilename && (
          <>
            <span>{'선택된 파일이 없습니다.'}</span>
          </>
        )}
      </div>
      <div class='flex flex-col items-center gap-4 p-4 mt-8'>
        <p class='text-2xl font-bold text-center'>JSON 디렉토리 → XLSX</p>
        <Button
          onClick={() => jsonZipFileInputRef.current?.click()}
        >
          .zip 파일 선택
        </Button>
        <input
          ref={jsonZipFileInputRef}
          class='sr-only'
          type='file'
          onchange={() => setJsonZipFilename((jsonZipFileInputRef.current?.files ?? [])[0]?.name)}
        />
        {jsonZipFilename && (
          <>
            <span>{jsonZipFilename}</span>
            <Button
              onClick={() => downloadI18nXlsx()}
            >
              변환
            </Button>
          </>
        )}
        {!jsonZipFilename && (
          <>
            <span>{'선택된 파일이 없습니다.'}</span>
          </>
        )}
      </div>
    </div>
  );
}
