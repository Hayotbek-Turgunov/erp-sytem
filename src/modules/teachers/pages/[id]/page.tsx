export default function TeacherProfile({ params }: { params: { id: string } }) {
  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold">Oqituvchi profili</h1>
      <p>Oqituvchi ID: {params.id}</p>
    </div>
  );
}
