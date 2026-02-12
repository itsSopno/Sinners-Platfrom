"use client";

import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import toast from "react-hot-toast";
import { FiCpu, FiUploadCloud, FiTerminal, FiExternalLink, FiGithub, FiX } from "react-icons/fi";

interface ProjectItems {
  name: string;
  description: string;
  image: string;
  year: number;
  live: string;
  clientRepo: string;
  technology: string[];
  approach: string;
}

const ProjectDeployment: React.FC = () => {
  const [imgUploading, setImgUploading] = useState<boolean>(false);
  const [updating, setUpdating] = useState<boolean>(false);
  const [techInput, setTechInput] = useState<string>("");

  const [iteams, setIteams] = useState<ProjectItems>({
    name: "",
    description: "",
    image: "",
    year: 2026,
    live: "",
    clientRepo: "",
    technology: ["React js", "Tailwind CSS", "Node js"],
    approach: ""
  });

  const imgbbapikey = "4c8ddf7ff8e6cc2277a637b2f504274a";

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImgUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbapikey}`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setIteams((prev) => ({ ...prev, image: data.data.url }));
        toast.success("DATA_ASSET_LINKED");
      }
    } catch (err) {
      toast.error("UPLINK_CRITICAL_FAILURE");
    } finally {
      setImgUploading(false);
    }
  };

  const handleAddTech = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && techInput.trim()) {
      e.preventDefault();
      if (!iteams.technology.includes(techInput.trim())) {
        setIteams((prev) => ({ ...prev, technology: [...prev.technology, techInput.trim()] }));
      }
      setTechInput("");
    }
  };

  const removeTech = (techToRemove: string) => {
    setIteams((prev) => ({ ...prev, technology: prev.technology.filter((t) => t !== techToRemove) }));
  };

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);
    try {
      const res = await fetch(`https://server-1-1-6g3a.onrender.com/iteams`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(iteams),
      });

      if (res.ok) {
        toast.success("UPLINK_SUCCESS_200");
        window.location.reload();
      } else {
        toast.error("PROTOCOL_REJECTED_BY_HOST");
      }
    } catch (err) {
      toast.error("KERNEL_PANIC: SYNC_FAILED");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#050507] p-4 lg:p-12 flex items-center justify-center font-mono text-zinc-400 selection:bg-purple-500 selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <form onSubmit={handelSubmit} className="relative w-full max-w-5xl bg-[#08080a] border border-zinc-800/50 p-1 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        
        {/* Terminal Frame Brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500" />

        <div className="p-6 md:p-10 space-y-10">
          {/* Header Section */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800/50 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FiTerminal className="text-purple-500 text-xl" />
                <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic">Studio_Sinners</h1>
              </div>
              <p className="text-[10px] tracking-[0.4em] text-zinc-500 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-ping" />
                SECURE_UPLINK_ESTABLISHED // PORT_2026
              </p>
            </div>
            <div className="flex gap-8 text-[10px] tracking-widest text-zinc-600">
              <div className="text-right">
                <p className="text-purple-400 font-bold mb-1">LOCAL_TIME</p>
                <p>{new Date().toLocaleTimeString()}</p>
              </div>
              <div className="text-right">
                <p className="text-purple-400 font-bold mb-1">NODE_ID</p>
                <p>SIN_0493_VX</p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Column A: Primary Manifest */}
            <section className="space-y-8">
              <div className="relative">
                <label className="text-[10px] text-purple-400 font-bold uppercase mb-3 block tracking-tighter italic flex items-center gap-2">
                   <span className="opacity-50">01_</span> Project_Signature
                </label>
                <input 
                  type="text" required
                  placeholder="IDENTIFY PROJECT..."
                  className="w-full bg-[#0c0c0e] border border-zinc-800 p-4 text-white outline-none focus:border-purple-500/50 transition-colors uppercase text-sm placeholder:text-zinc-700"
                  value={iteams.name}
                  onChange={(e) => setIteams({...iteams, name: e.target.value})}
                />
              </div>

              <div className="relative">
                <label className="text-[10px] text-purple-400 font-bold uppercase mb-3 block tracking-tighter italic flex items-center gap-2">
                   <span className="opacity-50">02_</span> Deployment_Manifest
                </label>
                <textarea 
                  rows={5} required
                  placeholder="INPUT SYSTEM OBJECTIVES..."
                  className="w-full bg-[#0c0c0e] border border-zinc-800 p-4 text-xs text-zinc-400 outline-none focus:border-purple-500/50 transition-colors resize-none"
                  value={iteams.description}
                  onChange={(e) => setIteams({...iteams, description: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <label className="text-[9px] text-zinc-600 flex items-center gap-2 uppercase tracking-widest"><FiExternalLink /> LIVE_DOMAIN</label>
                    <input type="text" value={iteams.live} className="w-full bg-[#0c0c0e] border border-zinc-800 p-3 text-[10px] focus:border-white/20 outline-none" onChange={(e)=>setIteams({...iteams, live: e.target.value})} />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[9px] text-zinc-600 flex items-center gap-2 uppercase tracking-widest"><FiGithub /> SOURCE_UPLINK</label>
                    <input type="text" value={iteams.clientRepo} className="w-full bg-[#0c0c0e] border border-zinc-800 p-3 text-[10px] focus:border-white/20 outline-none" onChange={(e)=>setIteams({...iteams, clientRepo: e.target.value})} />
                 </div>
              </div>
            </section>

            {/* Column B: Tech & Visuals */}
            <section className="space-y-8">
              <div>
                <label className="text-[10px] text-purple-400 font-bold uppercase mb-3 block tracking-tighter italic flex items-center gap-2">
                   <span className="opacity-50">03_</span> Tech_Stack_Injection
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={techInput}
                    onKeyDown={handleAddTech}
                    placeholder="ENTER_COMPONENT_NAME"
                    className="w-full bg-[#0c0c0e] border border-zinc-800 p-4 text-xs outline-none focus:border-purple-500/50"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTechInput(e.target.value)}
                  />
                  <FiCpu className="absolute right-4 top-4 text-zinc-700" />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {iteams.technology.map((tech, index) => (
                    <span key={index} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-[9px] text-zinc-400 flex items-center gap-3 group hover:border-purple-500 transition-colors">
                      {tech}
                      <FiX 
                        className="cursor-pointer text-zinc-600 hover:text-red-500" 
                        onClick={() => removeTech(tech)} 
                      />
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] text-purple-400 font-bold uppercase mb-3 block tracking-tighter italic flex items-center gap-2">
                   <span className="opacity-50">04_</span> Optical_Capture
                </label>
                <div className={`relative h-[210px] border border-zinc-800 bg-[#0c0c0e] group overflow-hidden transition-all ${iteams.image ? 'border-purple-500/50' : ''}`}>
                  {iteams.image ? (
                    <img src={iteams.image} alt="upload" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-20 group-hover:opacity-100 transition-opacity">
                      <FiUploadCloud className="text-4xl" />
                      <p className="text-[10px] tracking-[0.5em]">INITIALIZE_UPLOAD</p>
                    </div>
                  )}
                  <input type="file" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                  
                  {imgUploading && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-[10px] tracking-[1em] z-20">
                      SYNCHRONIZING...
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Master Submit */}
          <footer className="pt-6">
            <button 
              type="submit" 
              disabled={updating || imgUploading}
              className="relative w-full overflow-hidden group py-6 bg-white text-black font-black uppercase text-[11px] tracking-[1.2em] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">{updating ? "TRANSMITTING..." : "PUSH_TO_MAINLINE"}</span>
              <div className="absolute inset-0 bg-purple-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </button>
            <div className="mt-4 flex justify-between text-[8px] text-zinc-600 tracking-widest uppercase">
              <p>Status: All Systems Nominal</p>
              <p>v2.0.26_build</p>
            </div>
          </footer>
        </div>
      </form>
    </div>
  );
};

export default ProjectDeployment;