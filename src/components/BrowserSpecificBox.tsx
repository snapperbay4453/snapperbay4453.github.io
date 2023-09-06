import { useEffect, useState } from 'preact/hooks';

import { detectBrowser } from '@/utils/env';

interface BrowserSpecificBoxProps {
  browserName: string;
  children: any;
}
export default function BrowserSpecificBox({ browserName, children }: BrowserSpecificBoxProps) {
  const [currentBrowserName, setCurrentBrowserName] = useState('Unknown');

  useEffect(() => {
    const detectedBrowserName = detectBrowser();
    setCurrentBrowserName(detectedBrowserName);
  }, []);

  return (
    <div>
      {(currentBrowserName.toLowerCase() === browserName.toLowerCase()) && children}
    </div>
  );
}
