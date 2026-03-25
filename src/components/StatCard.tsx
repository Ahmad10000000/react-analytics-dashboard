type StatCardProps = {
  title: string;
  value: string;
  change: string;
};

const StatCard = ({ title, value, change }: StatCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
        {value}
      </h3>

      <p className="mt-3 text-sm font-medium text-green-600 dark:text-green-400">
        {change}
      </p>
    </div>
  );
};

export default StatCard;