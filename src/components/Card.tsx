interface CardProps {
  children: any;
}
export default function Card({ children }: CardProps) {
  return (
    <div
      class='border-2 border-slate-200 rounded-xl p-4'
    >
      {children}
    </div>
  );
}
