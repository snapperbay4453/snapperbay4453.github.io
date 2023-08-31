interface CardProps {
  children: any;
}
export default function Card({ children }: CardProps) {
  return (
    <div
      class='bg-white/30 dark:bg-black/30 backdrop-blur rounded-xl p-4'
    >
      {children}
    </div>
  );
}
