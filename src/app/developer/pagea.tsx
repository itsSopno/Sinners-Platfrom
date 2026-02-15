"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Plus, Trash2, UploadCloud, Loader2, Globe, User, Briefcase } from "lucide-react";

// Configs
const IMGBB_API_KEY = "4c8ddf7ff8e6cc2277a637b2f504274a";
const SERVER_URL = "https://server-1-1-6g3a.onrender.com/developer";

export default function FullyCompletedForm() {
  const { data: session } = useSession();
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    account_name: "",
    email: "",
    profile_image: "",
    cover_image: "",
    gender: "",
    country: "",
    title_name: "",
    skills: ["", ""],
    address: "",
    description: "",
    projects: [
      {
        id: Date.now().toString(),
        name: "",
        description: "",
        approach: "",
        image_one: "",
        image_two: "",
        image_three: "",
        tech: [""],
      },
    ],
  });

  // Auto-sync email from NextAuth session
  useEffect(() => {
    if (session?.user?.email) {
      setFormData((prev) => ({ ...prev, email: session.user.email as string }));
    }
  }, [session]);

  // --- ImgBB Upload Helper ---
  const uploadToImgBB = async (file: File) => {
    setIsUploading(true);
    try {
      const data = new FormData();
      data.append("image", file);
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      return json.data.url;
    } catch (err) {
      console.error("Upload Error:", err);
      return "";
    } finally {
      setIsUploading(false);
    }
  };

  // --- Handlers ---
  const handleGeneralImage = async (file: File, field: "profile_image" | "cover_image") => {
    const url = await uploadToImgBB(file);
    if (url) setFormData({ ...formData, [field]: url });
  };

  const handleProjectImage = async (pIndex: number, field: string, file: File) => {
    const url = await uploadToImgBB(file);
    if (url) {
      const updatedProjects = [...formData.projects];
      (updatedProjects[pIndex] as any)[field] = url;
      setFormData({ ...formData, projects: updatedProjects });
    }
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        { id: Date.now().toString(), name: "", description: "", approach: "", image_one: "", image_two: "", image_three: "", tech: [""] }
      ]
    });
  };

  const removeProject = (index: number) => {
    if (formData.projects.length > 1) {
      const updated = formData.projects.filter((_, i) => i !== index);
      setFormData({ ...formData, projects: updated });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(SERVER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Portfolio Deployed Successfully!");
      } else {
        alert("❌ Deployment Failed. Check Server.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("❌ Connection Error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans">
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 gap-4">
          <div>
            <h1 className="text-5xl font-black tracking-tighter uppercase italic text-white">System_Entry</h1>
            <p className="text-[10px] tracking-[0.5em] text-white/40 mt-2">LINKED_NODE: {formData.email || "GUEST_SESSION"}</p>
          </div>
          <button 
            type="submit"
            disabled={isSubmitting || isUploading}
            className="bg-white text-black px-12 py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30"
          >
            {isSubmitting ? "Syncing..." : "Deploy_Archive"}
          </button>
        </div>

        {/* 1. Identity Assets (Profile/Cover) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ImageUploadBox 
            label="Profile_Asset" 
            url={formData.profile_image} 
            onUpload={(file) => handleGeneralImage(file, "profile_image")} 
            round
          />
          <ImageUploadBox 
            label="Cover_Environment" 
            url={formData.cover_image} 
            onUpload={(file) => handleGeneralImage(file, "cover_image")} 
          />
        </section>

        {/* 2. Personal Data */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Account_Name" value={formData.account_name} onChange={(v) => setFormData({...formData, account_name: v})} />
          <InputField label="Title_Name" value={formData.title_name} onChange={(v) => setFormData({...formData, title_name: v})} />
          <InputField label="Country" value={formData.country} onChange={(v) => setFormData({...formData, country: v})} />
          <InputField label="Address" value={formData.address} onChange={(v) => setFormData({...formData, address: v})} />
        </section>

        {/* 3. Project Archive */}
        <section className="space-y-10">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <h2 className="text-xs tracking-[0.8em] uppercase italic font-bold">Project_Data_Grid</h2>
            <button type="button" onClick={addProject} className="p-2 border border-white/10 hover:bg-white hover:text-black transition-all">
              <Plus size={16} />
            </button>
          </div>

          {formData.projects.map((proj, idx) => (
            <div key={proj.id} className="p-8 bg-zinc-900/30 border border-white/5 space-y-8 relative group">
              <button 
                type="button" 
                onClick={() => removeProject(idx)}
                className="absolute top-4 right-4 text-white/20 hover:text-red-500 transition-colors"
              >
                <Trash2 size={16} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ProjectImg label="IMG_01" url={proj.image_one} onUpload={(f) => handleProjectImage(idx, "image_one", f)} />
                <ProjectImg label="IMG_02" url={proj.image_two} onUpload={(f) => handleProjectImage(idx, "image_two", f)} />
                <ProjectImg label="IMG_03" url={proj.image_three} onUpload={(f) => handleProjectImage(idx, "image_three", f)} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Project_Name" value={proj.name} onChange={(v) => {
                  const updated = [...formData.projects];
                  updated[idx].name = v;
                  setFormData({...formData, projects: updated});
                }} />
                <InputField label="Tech_Stack (Comma Separated)" value={proj.tech.join(", ")} onChange={(v) => {
                  const updated = [...formData.projects];
                  updated[idx].tech = v.split(",").map(t => t.trim());
                  setFormData({...formData, projects: updated});
                }} />
              </div>
              <textarea 
                className="w-full bg-black/40 border border-white/10 p-4 outline-none focus:border-white/40 h-24 text-sm"
                placeholder="PROJECT_DESCRIPTION_LOG"
                value={proj.description}
                onChange={(e) => {
                  const updated = [...formData.projects];
                  updated[idx].description = e.target.value;
                  setFormData({...formData, projects: updated});
                }}
              />
            </div>
          ))}
        </section>
      </form>
    </div>
  );
}

// --- Internal UI Components ---

const InputField = ({ label, value, onChange }: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-[9px] uppercase tracking-[0.3em] text-white/40">{label}</label>
    <input 
      className="bg-transparent border-b border-white/10 p-2 outline-none focus:border-white transition-all text-sm font-mono"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const ImageUploadBox = ({ label, url, onUpload, round = false }: any) => (
  <div className="space-y-4">
    <label className="text-[9px] uppercase tracking-[0.5em] text-white/40">{label}</label>
    <div className={`relative ${round ? 'w-32 h-32 rounded-full' : 'w-full h-40'} bg-zinc-900 border border-white/5 overflow-hidden group cursor-pointer`}>
      {url ? <img src={url} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full opacity-20"><UploadCloud /></div>}
      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => e.target.files && onUpload(e.target.files[0])} />
    </div>
  </div>
);

const ProjectImg = ({ label, url, onUpload }: any) => (
  <div className="space-y-2">
    <div className="aspect-square bg-black border border-white/5 relative overflow-hidden group flex items-center justify-center">
      {url ? <img src={url} className="w-full h-full object-cover" /> : <span className="text-[8px] opacity-10 uppercase tracking-widest">{label}</span>}
      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => e.target.files && onUpload(e.target.files[0])} />
    </div>
  </div>
);