export default function Dashboard() {
  const stats = [
    { title: "Total Students", value: 150, color: "bg-blue-500" },
    { title: "Total Teachers", value: 25, color: "bg-green-500" },
    { title: "Monthly Income", value: "$12,000", color: "bg-purple-500" },
    { title: "Total Courses", value: 10, color: "bg-red-500" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} p-4 rounded-lg shadow-md text-white`}
          >
            <h2 className="text-xl font-bold">{stat.title}</h2>
            <p className="text-3xl mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
