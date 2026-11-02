interface PlaceholderImageProps {
  label: string;
  className?: string;
}

export default function PlaceholderImage({ label, className = '' }: PlaceholderImageProps) {
  return (
    <div className={`bg-neutral-200 flex items-center justify-center ${className}`}>
      <span className="text-neutral-400 text-sm md:text-base">{label}</span>
    </div>
  );
}
