// Spinner.jsx
export default function Spinner({
  size = 8,
  colorClass = 'border-t-blue-600',
}) {
  const px = `w-${size} h-${size}`;
  // prefer fixed classes in Tailwind builds, but this shows intent
  return (
    <div role="status" className="flex items-center justify-center">
      <div
        className={`border-4 border-gray-200 ${colorClass} rounded-full animate-spin`}
        style={{ width: `${size * 0.25}rem`, height: `${size * 0.25}rem` }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
