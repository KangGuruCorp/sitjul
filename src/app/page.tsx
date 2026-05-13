"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2 } from "lucide-react";

export default function StudentLogin() {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim().toUpperCase();
    const cleanSchool = school.trim().toUpperCase();
    if (!cleanName || !cleanSchool || phoneError) return;

    setLoading(true);
    try {
      let studentId = "";
      let existingData: any = null;

      // 1. FAST PATH: Check Local Storage First
      const localDataStore = localStorage.getItem("localStudentsData");
      const localStudents = localDataStore ? JSON.parse(localDataStore) : {};
      const localMatch = Object.values(localStudents).find((s: any) =>
        s.name === cleanName && s.school === cleanSchool
      ) as any;

      if (localMatch) {
        studentId = localMatch.id;
        existingData = localMatch;
        console.log("Local match found, skipping initial cloud query for speed.");
      } else if (db) {
        // 2. CLOUD PATH: Only if not found locally, check cloud with timeout
        console.log("No local match, checking cloud...");
        const q = query(
          collection(db, "students"),
          where("name", "==", cleanName),
          where("school", "==", cleanSchool)
        );

        // Timeout promise to prevent infinite spinning
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Cloud timeout")), 8000)
        );

        try {
          const querySnapshot = (await Promise.race([
            getDocs(q),
            timeoutPromise
          ])) as any;

          if (!querySnapshot.empty) {
            const docSnap = querySnapshot.docs[0];
            studentId = docSnap.id;
            existingData = docSnap.data();
            console.log("Cloud match found.");
          }
        } catch (cloudErr) {
          console.warn("Cloud check failed or timed out:", cloudErr);
          // Continue to step 3 to create new if cloud fails
        }
      }

      // 3. FALLBACK: Create new if still not found
      if (!studentId) {
        console.log("Creating new student profile.");
        studentId = "std-" + Date.now();
        existingData = {
          id: studentId,
          name: cleanName,
          school: cleanSchool,
          phone: phone.trim(),
          createdAt: new Date().toISOString(),
          status_progres: 0
        };

        // Try to sync new doc to cloud in background (don't await if we want speed, 
        // but await here for safety of initial creation)
        if (db) {
          try {
            await Promise.race([
              setDoc(doc(db, "students", studentId), existingData),
              new Promise((_, reject) => setTimeout(() => reject(new Error("SetDoc timeout")), 5000))
            ]);
          } catch (err) {
            console.warn("Initial cloud sync failed, will retry later.");
          }
        }
      } else if (db && phone.trim() && phone.trim() !== existingData.phone) {
        // Update phone if provided and different (background)
        setDoc(doc(db, "students", studentId), { phone: phone.trim() }, { merge: true }).catch(console.error);
      }

      // 4. Finalize Session & Navigate
      sessionStorage.setItem("studentId", studentId);
      sessionStorage.setItem("studentName", cleanName);
      sessionStorage.setItem("studentSchool", existingData.school || cleanSchool);
      
      if (phone.trim() || existingData.phone) {
        sessionStorage.setItem("studentPhone", phone.trim() || existingData.phone || "");
      }
      
      if (!localStorage.getItem(`start_${studentId}`)) {
        localStorage.setItem(`start_${studentId}`, Date.now().toString());
      }

      // Update local cache
      const updatedLocalData = localStorage.getItem("localStudentsData");
      let students = updatedLocalData ? JSON.parse(updatedLocalData) : {};
      students[studentId] = {
        ...existingData,
        phone: phone.trim() || existingData.phone || "",
        lastLogin: new Date().toISOString()
      };
      localStorage.setItem("localStudentsData", JSON.stringify(students));

      console.log("Login successful, navigating...");
      router.push("/student");
    } catch (error) {
      console.error("Login process error:", error);
      alert("Terjadi kesalahan teknis. Namun Anda tetap dapat melanjutkan pengerjaan.");
      // Even on error, if we have some data, try to push through
      if (name && school) {
          router.push("/student");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-500">
        <div className="bg-primary p-8 text-center text-white">
          <img
            src="https://i.ibb.co.com/20ZD2sSB/unindra.png"
            alt="Logo Unindra"
            className="h-20 w-auto mx-auto mb-4 object-contain"
          />
          <h1 className="text-2xl font-black mb-3 uppercase tracking-wide">
            Portal Instrumen
          </h1>
          <h2 className="text-xs md:text-sm font-medium mb-4 leading-relaxed px-4 opacity-80">
            (Pengaruh Persepsi atas Model Pembelajaran dan Sikap Ilmiah terhadap Kemampuan Berpikir Kritis Ilmu Pengetahuan Alam)
          </h2>
          <div className="bg-white/10 rounded-2xl p-4 text-[10px] md:text-xs text-white/90 border border-white/5 leading-relaxed backdrop-blur-sm mx-4">
            <p>
              Semua data akan tersimpan otomatis. Jika ingin masuk lagi dengan memulihkan progres pengerjaan, cukup masukkan nama lengkap dan nama sekolah sesuai pengisian awal.
            </p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="p-8 pb-6">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
              Masukan Nama Lengkap <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Budi Santoso"
              className="w-full text-lg px-4 py-4 rounded-xl border-2 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none"
              required
              disabled={loading}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="school" className="block text-sm font-semibold text-foreground mb-2">
              Nama Sekolah <span className="text-rose-500">*</span>
            </label>
            <input
              id="school"
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="Contoh: SMP Negeri 1 Jakarta"
              className="w-full text-lg px-4 py-4 rounded-xl border-2 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none"
              required
              disabled={loading}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
              Nomor HP (Opsional)
            </label>
            <div className="relative">
              <input
                id="phone"
                type="text"
                inputMode="numeric"
                value={phone}
                onChange={(e) => {
                  const val = e.target.value;
                  setPhone(val);
                  if (val && !/^\d+$/.test(val)) {
                    setPhoneError("Hanya angka yang diperbolehkan");
                  } else {
                    setPhoneError("");
                  }
                }}
                placeholder="Contoh: 081234567890"
                className={`w-full text-lg px-4 py-4 rounded-xl border-2 transition-all outline-none ${phoneError ? 'border-rose-500 focus:ring-4 focus:ring-rose-500/20' : 'border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/20'}`}
                disabled={loading}
              />
              {phoneError && (
                <p className="mt-2 text-xs font-bold text-rose-500 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                  <span className="text-sm">⚠️</span> {phoneError}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !name.trim() || !school.trim() || !!phoneError}
            className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-6 h-6" />
                Memproses...
              </>
            ) : (
              "Mulai"
            )}
          </button>

          <div className="mt-6 text-center">
            <button type="button" onClick={() => router.push('/admin/login')} className="text-slate-400 hover:text-primary text-xs font-medium transition-colors">
              Masuk sebagai Peneliti (Admin)
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
