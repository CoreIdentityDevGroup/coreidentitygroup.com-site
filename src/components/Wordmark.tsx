type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: WordmarkProps) {
  return (
    <img
      src="/assets/brand/chc-wordmark.svg"
      alt="Core Holding Corporation"
      className={className}
    />
  );
}
