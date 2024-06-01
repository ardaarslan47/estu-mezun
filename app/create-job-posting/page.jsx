"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

const CreateJobPosting = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session?.user) router.push("/");

  const [submitting, setSubmitting] = useState(false);
  const [jobPosting, setJobPosting] = useState({
    job: "",
    desc: "",
    firm: "",
    _location: "",
  });

  const createJobPosting = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/job-postings/new", {
        method: "POST",
        body: JSON.stringify({
          job: jobPosting.job,
          desc: jobPosting.desc,
          firm: jobPosting.firm,
          _location: jobPosting._location,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">İş İlanı Ekle</span>
      </h1>
      <form
        onSubmit={createJobPosting}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            İş:
          </span>
          <input
            value={jobPosting.job}
            onChange={(e) =>
              setJobPosting({ ...jobPosting, job: e.target.value })
            }
            placeholder="..."
            required
            className="form_input"
          />
        </label>
        <div className="flex gap-5">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Firma:
            </span>
            <input
              value={jobPosting.firm}
              onChange={(e) =>
                setJobPosting({ ...jobPosting, firm: e.target.value })
              }
              placeholder="..."
              required
              className="form_input"
            />
          </label>
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Konum:
            </span>
            <input
              value={jobPosting._location}
              onChange={(e) =>
                setJobPosting({ ...jobPosting, _location: e.target.value })
              }
              placeholder="..."
              required
              className="form_input"
            />
          </label>
        </div>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Açıklama:
          </span>
          <textarea
            value={jobPosting.desc}
            onChange={(e) =>
              setJobPosting({ ...jobPosting, desc: e.target.value })
            }
            placeholder="..."
            required
            className="form_textarea"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            İptal
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? "Ekleniyor ..." : "Ekle"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateJobPosting;
