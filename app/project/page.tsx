import whoisScreenshot from "../components/assets/lunairefine.png";
import cekwarnaScreenshot from "../components/assets/lunairefine.png";
import project3Screenshot from "../components/assets/lunairefine.png"; 
import { ProjectCard } from "../components/card";

const projects = [
  {
    title: "WHOIS",
    imageUrl: whoisScreenshot,
    liveUrl: "https://whois-ferdysetiawan.vercel.app/",
    description: "WHOIS Lookup adalah alat untuk memudahkan pengguna dalam mengakses informasi penting terkait nama domain atau alamat IP. Dengan antarmuka yang sederhana dan ramah pengguna, tool ini memungkinkan siapa saja untuk mendapatkan data pendaftaran domain secara cepat dan efisien.",
    tags: ["Network", "Domain", "Tools"],
  },
  {
    title: "CEKWARNA",
    imageUrl: cekwarnaScreenshot,
    liveUrl: "https://cekwarna.vercel.app/",
    description: "Cek Warna adalah alat yang dirancang untuk membantu pengguna mengidentifikasi adanya dead pixel pada layar perangkat mereka. Dengan menggunakan warna-warna solid yang bervariasi, pengguna dapat dengan mudah memeriksa setiap bagian layar dan mendeteksi piksel yang tidak berfungsi.",
    tags: ["Colors", "Tools", "Utility"],
  },
  {
    title: "PROYEK KETIGA",
    imageUrl: project3Screenshot,
    liveUrl: "#",
    description: "Deskripsi singkat mengenai proyek ketiga Anda. Jelaskan tujuan, teknologi yang digunakan, dan apa yang membuatnya menarik bagi pengunjung portfolio Anda.",
    tags: ["Showcase", "Portfolio"],
  },
];

export default function ProjectPage() {
  return (
    <main className="bg-black text-white min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center my-8 sm:my-12 tracking-wide">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </main>
  );
}