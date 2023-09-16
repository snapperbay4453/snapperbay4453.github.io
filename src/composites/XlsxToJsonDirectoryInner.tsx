import { useState, useRef } from 'preact/hooks';
import {
  createTemplateI18nXlsx,
  convertI18XlsxToJsonDirectoryZip,
  convertJsonDirectoryZipToI18Xlsx
} from 'i18n-xlsx-to-json-directory';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function HeaderInner() {
  const xlsxFileInputRef = useRef<HTMLInputElement>();
  const jsonZipFileInputRef = useRef<HTMLInputElement>();
  const [xlsxFilename, setXlsxFilename] = useState<string>();
  const [jsonZipFilename, setJsonZipFilename] = useState<string>();

  const downloadI18nJsonZip = () => {
    if(fileInputRef?.current) {
      convertI18XlsxToJsonDirectoryZip((fileInputRef.current.files ?? [])[0]);
    }
  };

  const downloadI18nXlsx = () => {
    if(jsonZipFileInputRef?.current) {
      convertJsonDirectoryZipToI18Xlsx((jsonZipFileInputRef.current.files ?? [])[0]);
    }
  };

  return (
    <div class='flex flex-col items-center gap-4'>
      <div class='mt-8'>
        <div class='flex items-center gap-4'>
          <Button
            onClick={() => createTemplateI18nXlsx()}
          >
            .xlsx 템플릿 다운로드
          </Button>
        </div>
      </div>
      <div class='flex flex-col items-center gap-4 p-4 mt-8'>
        <p class='text-2xl font-bold text-center'>XLSX → JSON</p>
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
        <p class='text-2xl font-bold text-center'>JSON → XLSX</p>
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
