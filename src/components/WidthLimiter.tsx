interface WidthLimiterProps {
  children: any;
}
export default function WidthLimiter({ children }: WidthLimiterProps) {
  return (
    <div class='max-w-5xl mx-auto px-4 5xl:px-0'>
      {children}
    </div>
  );
}
